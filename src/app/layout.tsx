import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Designs & Development by Danielle Dockery",
  description:
    "A professional digital studio creating websites, iOS apps, interactive sales tools, and practical business solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
