import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lamebrains = localFont({
  src: "./assets/LAMEBRAINS.ttf",
  variable: "--font-lamebrains",
  weight: "100 900",
});
const ransom = localFont({
  src: "./assets/Ransom.ttf",
  variable: "--font-ransom",
  weight: "100 900",
});
const blancoZero = localFont({
  src: "./assets/Ransom Blanco Zero.ttf",
  variable: "--font-blanco-zero",
  weight: "100 900",
});

export const metadata = {
  title: "Kanthos",
  description: "Kanthos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lamebrains.variable} ${ransom.variable} ${blancoZero.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
