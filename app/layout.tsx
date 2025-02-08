import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { BasketProvider } from "@/contexts/BasketContext"
import Header from "@/components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Picture Marketplace",
  description: "Buy beautiful pictures online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasketProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </BasketProvider>
      </body>
    </html>
  )
}

