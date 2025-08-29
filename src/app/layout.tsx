import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Yet",
  description: "Discover talented creatives from South Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <ConvexClientProvider>
          <div className="min-h-screen flex flex-col">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <Link href="/" className="flex-shrink-0 flex items-center">
                      <span className="text-xl font-bold text-gray-900">Better Yet</span>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link href="/directory" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Directory
                    </Link>
                    <Link href="/admin" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Admin
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            
            {/* Main Content */}
            <main className="flex-grow">
              {children}
            </main>
            
            {/* Footer */}
            <footer className="bg-white border-t border-gray-200">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} Better Yet. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
