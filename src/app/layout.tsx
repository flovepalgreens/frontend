import "./globals.css";
import Navigation from "../components/Navigation";
import PageWrapper from "../components/PageWrapper";
import { Metadata } from "next"; // ✅ Import Metadata for Next.js 13+

export const metadata: Metadata = {
  title: "Flovepal GreenSpace", // ✅ Automatically sets the title
  icons: {
    icon: "/logo.png", // ✅ High-resolution favicon
    apple: "/logo.png", // ✅ For Apple devices
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/logo.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-gray-950 text-white">
        <PageWrapper> {/* ✅ Wraps Content for Page Transitions */}
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
