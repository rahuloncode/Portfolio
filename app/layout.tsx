import type { Metadata } from "next";
import { Chivo, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import AboutFooter from "@/components/AboutFooter";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "700"], // optional
  variable: "--font-chivo",
});

const shippori_Mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "700"], // optional
  variable: "--font-ship_min",
});

export const metadata: Metadata = {
  title: "Codex Rahul",
  description: "Portfolio ste for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chivo.variable}  ${shippori_Mincho.variable} `}
    >
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* navbar */}
        <Navbar />

        {/* main content */}

        <main>
          {children} <About />
          <Expertise />
          <Experience />
          <Project />
          <AboutFooter />
          {/* <Contact /> */}
        </main>

        {/* Footer */}

        <Footer />
      </body>
    </html>
  );
}
