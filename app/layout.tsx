import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DeferredWidgets from "./components/DeferredWidgets";

export const metadata: Metadata = {
  title: "Fisioterapia Malavasi | Cavezzo",
  description: "Studio di Fisioterapia del Dott. Mirco Malavasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="antialiased font-sans min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow w-full">
          {children}
        </main>

        <Footer />
        
        <DeferredWidgets />
      </body>
    </html>
  );
}
