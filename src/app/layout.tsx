import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GCCI International LLP | Global Corporate Council India – Inspiring Global Excellence",
  description:
    "Transforming organizations through knowledge, innovation, and collaboration. Specialists in TPM, Lean Manufacturing, Industrial Automation, AI Vision Inspection Systems, and Maintenance Software.",
  keywords: [
    "GCCI",
    "GCCI International LLP",
    "Global Corporate Council India",
    "TPM Consulting",
    "Total Productive Maintenance",
    "Industrial Automation",
    "Vision Inspection Systems",
    "ERW Steel Tube Mills",
    "Lean Manufacturing",
    "Pune Industrial Consulting"
  ],
  authors: [{ name: "GCCI International LLP" }],
  openGraph: {
    title: "GCCI International LLP | Inspiring Global Excellence",
    description:
      "Transforming organizations through knowledge, innovation, and collaboration with global expertise from Japan, Germany, USA, and Australia.",
    url: "https://gcc-india.com",
    siteName: "GCCI International",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/new_logo_gcci.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
