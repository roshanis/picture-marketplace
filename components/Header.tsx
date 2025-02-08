"use client"

import Link from "next/link"
import { ShoppingCart, Home } from "lucide-react"
import { useBasket } from "@/contexts/BasketContext"

export default function Header() {
  const { totalItems } = useBasket()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 flex items-center">
          <Home className="w-6 h-6 mr-2" />
          Picture Marketplace
        </Link>
        <Link href="/basket" className="flex items-center text-gray-600 hover:text-gray-800">
          <ShoppingCart className="w-6 h-6 mr-2" />
          <span className="font-semibold">{totalItems}</span>
        </Link>
      </div>
    </header>
  )
}

