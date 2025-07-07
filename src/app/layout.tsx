import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "First Rank - AI-Powered Learning Platform",
  description: "Transform your learning experience with our AI-powered educational platform. Personalized, engaging, and effective.",
  keywords: ["education", "e-learning", "AI learning", "online courses", "personalized learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased relative`}>
        {/* Background Image */}
        <div 
          className="fixed inset-0 -z-10 bg-[url('/Images/bg_landing.png')] bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-100 w-full h-full"
          style={{
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        />
        {/* Content */}
        <div className="flex flex-col min-h-screen relative">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
