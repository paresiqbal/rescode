import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// components
import Nav from "./components/Nav";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResCode",
  description: "Personal blogging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
