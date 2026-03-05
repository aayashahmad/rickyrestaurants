import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { OrderProvider } from "@/context/OrderContext";
import { BookingProvider } from "@/context/BookingContext";

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
  title: "Ember & Oak | Flavors That Define Dubai",
  description:
    "Experience culinary artistry at Ember & Oak — Dubai Marina's premier destination for exquisite dining, bespoke catering, and unforgettable gatherings.",
  keywords:
    "restaurant Dubai, fine dining Dubai Marina, catering services Dubai, luxury dining, private events, corporate catering",
  openGraph: {
    title: "Ember & Oak | Flavors That Define Dubai",
    description:
      "Dubai Marina's premier destination for exquisite dining and bespoke catering.",
    type: "website",
    locale: "en_US",
    siteName: "Ember & Oak",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <OrderProvider>
          <BookingProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </BookingProvider>
        </OrderProvider>
      </body>
    </html>
  );
}

