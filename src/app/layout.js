import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import HeaderClientOnly from "@/components/Header/HeaderClientOnly";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { OrderProvider } from "@/context/OrderContext";
import { BookingProvider } from "@/context/BookingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import AutoTranslate from "@/components/AutoTranslate/AutoTranslate";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ricky's Restaurant | Flavors That Define Dubai",
  description:
    "Experience culinary artistry at Ricky's Restaurant — Dubai Marina's premier destination for exquisite dining, bespoke catering, and unforgettable gatherings.",
  keywords:
    "restaurant Dubai, fine dining Dubai Marina, catering services Dubai, luxury dining, private events, corporate catering",
  openGraph: {
    title: "Ricky's Restaurant | Flavors That Define Dubai",
    description:
      "Dubai Marina's premier destination for exquisite dining and bespoke catering.",
    type: "website",
    locale: "en_US",
    siteName: "Ricky's Restaurant",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <LanguageProvider>
          <OrderProvider>
            <BookingProvider>
              <HeaderClientOnly />
              <main>{children}</main>
              <Footer />
              <ScrollToTop />
              <AutoTranslate />
            </BookingProvider>
          </OrderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
