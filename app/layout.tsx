import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui";

export const metadata: Metadata = {
  title: {
    default: "Astha Singh - Fashion, Product & Brand",
    template: "%s | Astha Singh",
  },
  description:
    "Astha Singh’s portfolio: fashion management, product development, merchandising, e-commerce and brand experiences. NIFT Mumbai, Master of Fashion Management, 2024–2026.",
  authors: [{ name: "Astha Singh" }],
  applicationName: "Astha Singh Portfolio",
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
