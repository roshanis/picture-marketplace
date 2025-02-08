"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useBasket } from "@/contexts/BasketContext"

export default function AddToCartButton({ picture }: { picture: { id: number; title: string; price: number } }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useBasket()

  const handleAddToCart = () => {
    addItem(picture)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdded} className="w-full">
      {isAdded ? "Added to Cart!" : "Add to Cart"}
    </Button>
  )
}

