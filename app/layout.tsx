import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Verlaine Micali — Implantes Dentários",
  description:
    "Especialista em implantes dentários. Recupere a liberdade de sorrir com segurança, estética e técnica de excelência.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Dra. Verlaine Micali — Implantes Dentários",
    description:
      "Especialista em implantes dentários. Recupere a liberdade de sorrir.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${schibsted.className} antialiased`}>{children}</body>
    </html>
  );
}
