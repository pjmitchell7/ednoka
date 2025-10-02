// app/layout.js
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Ednoka Short Film",
  description: "A short film streaming site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-white">
        {/* Background */}
        <Image
          src="/assets/images/background1.png"
          alt="Background"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover"
        />

        {/* Overlay (optional, for readability) */}
        <div className="absolute inset-0 bg-black/50 -z-10" />

        {/* Content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
