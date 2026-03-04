import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ricky's Restaurant | Eat What Makes You Happy",
  description:
    "Ricky's Restaurant is one of the finest restaurants in Dubai to dine-in with the best combination of spices. Food delivery, event catering, and other services.",
  keywords:
    "restaurant, Dubai, catering, fine dining, food delivery, event catering, wedding catering, corporate catering",
  openGraph: {
    title: "Ricky's Restaurant | Eat What Makes You Happy",
    description:
      "One of the finest restaurants in Dubai. Food delivery, event catering, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Ricky's Restaurant",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
