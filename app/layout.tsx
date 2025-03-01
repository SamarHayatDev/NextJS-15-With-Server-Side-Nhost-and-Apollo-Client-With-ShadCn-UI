import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NhostProviderContext from "@/provider/NhostProvider";
import ApolloProviderContext from "@/provider/ApolloProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nhost ServerSide",
  description: "Nhost Server Side",
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
        <NhostProviderContext>
          <ApolloProviderContext>{children}</ApolloProviderContext>
        </NhostProviderContext>
      </body>
    </html>
  );
}
