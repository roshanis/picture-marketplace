"use client"

import { useBasket } from "@/contexts/BasketContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ShoppingCart, Trash2, CreditCard, User } from "lucide-react"

export default function BasketPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearBasket } = useBasket()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    // For this example, we'll just simulate a successful payment
    alert("Payment successful! Thank you for your purchase.")
    clearBasket()
    setIsCheckingOut(false)
  }

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
          <ShoppingCart className="w-8 h-8 mr-2" />
          Your basket is empty
        </h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <ShoppingCart className="w-8 h-8 mr-2" />
        Your Basket
      </h1>
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
              className="w-16 mr-4"
            />
            <Button variant="destructive" onClick={() => removeItem(item.id)}>
              <Trash2 className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </div>
        </div>
      ))}
      <div className="mt-4 text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
      {!isCheckingOut ? (
        <Button className="mt-4" onClick={() => setIsCheckingOut(true)}>
          <CreditCard className="w-5 h-5 mr-2" />
          Proceed to Checkout
        </Button>
      ) : (
        <form onSubmit={handleCheckout} className="mt-4">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <CreditCard className="w-6 h-6 mr-2" />
            Payment Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              <Input type="text" placeholder="Card Number" required />
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center flex-1">
                <CreditCard className="w-5 h-5 mr-2" />
                <Input type="text" placeholder="MM/YY" required />
              </div>
              <div className="flex items-center flex-1">
                <CreditCard className="w-5 h-5 mr-2" />
                <Input type="text" placeholder="CVC" required />
              </div>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <Input type="text" placeholder="Cardholder Name" required />
            </div>
            <Button type="submit">
              <CreditCard className="w-5 h-5 mr-2" />
              Pay ${totalPrice.toFixed(2)}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

