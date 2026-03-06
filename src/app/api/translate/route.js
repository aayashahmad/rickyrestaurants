import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const key = process.env.GOOGLE_TRANSLATE_API_KEY;

    const q = Array.isArray(body?.q) ? body.q : [String(body?.q || "")];
    const target = String(body?.target || "en");
    const source = body?.source ? String(body.source) : undefined;

    if (key) {
      const params = new URLSearchParams();
      params.set("key", key);
      q.forEach((t) => params.append("q", t));
      params.set("target", target);
      if (source) params.set("source", source);

      const url = "https://translation.googleapis.com/language/translate/v2";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!res.ok) {
        return NextResponse.json({ error: "translate_failed" }, { status: 500 });
      }

      const data = await res.json();
      return NextResponse.json(data, { status: 200 });
    }

    const sl = source || "auto";
    const translations = await Promise.all(
      q.map(async (text) => {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(sl)}&tl=${encodeURIComponent(target)}&dt=t&q=${encodeURIComponent(String(text))}`;
        const res = await fetch(url);
        if (!res.ok) return { translatedText: String(text) };
        const json = await res.json();
        const parts = Array.isArray(json?.[0]) ? json[0].map((p) => p?.[0] || "") : [];
        const translated = parts.join("") || String(text);
        return { translatedText: translated };
      })
    );

    return NextResponse.json({ data: { translations } }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
