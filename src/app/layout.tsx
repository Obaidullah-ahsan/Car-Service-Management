import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ChakraBaseProvider } from '@chakra-ui/react'

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

export const metadata: Metadata = {
  title: "CarHive",
  description: `CarHive is a comprehensive car management platform designed to simplify and enhance the way you manage your vehicle fleet or personal cars. Whether you're a business owner overseeing multiple vehicles or an individual car enthusiast, CarHive offers an all-in-one solution for tracking, maintaining, and optimizing your car's performance and service needs.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChakraBaseProvider>
        {children}
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
