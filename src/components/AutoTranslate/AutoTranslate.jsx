"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const EXCLUDE_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME"]);
const CACHE_PREFIX = "translateCache:v1:";

function isIgnorableNode(node) {
  if (!node) return true;
  if (node.nodeType !== Node.TEXT_NODE) return true;

  const parent = node.parentElement;
  if (!parent) return true;
  if (EXCLUDE_TAGS.has(parent.tagName)) return true;
  if (parent.closest("[data-no-translate='true']")) return true;

  const text = node.nodeValue;
  if (!text) return true;
  if (!text.trim()) return true;

  return false;
}

function collectTextNodes(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let n = walker.nextNode();
  while (n) {
    if (!isIgnorableNode(n)) nodes.push(n);
    n = walker.nextNode();
  }
  return nodes;
}

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function translateBatch({ texts, target, source }) {
  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q: texts, target, source }),
  });

  if (!res.ok) throw new Error("translate_failed");
  const data = await res.json();
  const translations = data?.data?.translations || [];
  return translations.map((t) => t?.translatedText ?? "");
}

function getCacheKey(source, target) {
  return `${CACHE_PREFIX}${source || "auto"}->${target}`;
}

function readCache(source, target) {
  try {
    const raw = localStorage.getItem(getCacheKey(source, target));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeCache(source, target, cache) {
  try {
    localStorage.setItem(getCacheKey(source, target), JSON.stringify(cache));
  } catch {
    // ignore
  }
}

export default function AutoTranslate() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const originalsRef = useRef(new WeakMap());
  const observerRef = useRef(null);
  const translatingRef = useRef(false);
  const debounceTimerRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const cleanupObserver = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (debounceTimerRef.current) {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.querySelector("main") || document.body;
    if (!root) return;

    const textNodes = collectTextNodes(root);

    const translatePage = async () => {
      if (translatingRef.current) return;
      translatingRef.current = true;
      setBusy(true);

      const source = "en";
      const target = "ar";
      const cache = readCache(source, target);

      const toTranslateNodes = [];
      const toTranslateTexts = [];

      const nodes = collectTextNodes(root);
      for (const node of nodes) {
        if (!originalsRef.current.has(node)) {
          originalsRef.current.set(node, node.nodeValue);
        }

        const original = originalsRef.current.get(node);
        if (!original || !original.trim()) continue;

        const cached = cache[original];
        if (typeof cached === "string") {
          node.nodeValue = cached;
        } else {
          toTranslateNodes.push(node);
          toTranslateTexts.push(original);
        }
      }

      const chunks = chunkArray(toTranslateTexts, 50);
      let offset = 0;

      for (const chunk of chunks) {
        const translated = await translateBatch({ texts: chunk, source, target });
        for (let i = 0; i < translated.length; i++) {
          const original = chunk[i];
          const t = translated[i] || original;
          cache[original] = t;
          const node = toTranslateNodes[offset + i];
          if (node) node.nodeValue = t;
        }
        offset += chunk.length;
      }

      writeCache(source, target, cache);
      setBusy(false);
      translatingRef.current = false;
    };

    if (language === "en") {
      cleanupObserver();
      translatingRef.current = true;
      for (const node of textNodes) {
        const original = originalsRef.current.get(node);
        if (typeof original === "string") {
          node.nodeValue = original;
        }
      }
      Promise.resolve().then(() => {
        setBusy(false);
        translatingRef.current = false;
      });
      return;
    }

    translatePage().catch(() => {
      setBusy(false);
      translatingRef.current = false;
    });

    cleanupObserver();
    const observer = new MutationObserver(() => {
      if (translatingRef.current) return;
      if (debounceTimerRef.current) window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(() => {
        translatePage().catch(() => {
          setBusy(false);
          translatingRef.current = false;
        });
      }, 250);
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    observerRef.current = observer;

    return () => {
      cleanupObserver();
    };
  }, [language, pathname]);

  return busy ? (
    <div
      data-no-translate="true"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 2000,
        padding: "10px 14px",
        borderRadius: 9999,
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#F5F5F5",
        fontSize: 12,
        backdropFilter: "blur(12px)",
      }}
    >
      Translating…
    </div>
  ) : null;
}
