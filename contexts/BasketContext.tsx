"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type BasketItem = {
  id: number
  title: string
  price: number
  quantity: number
}

type BasketContextType = {
  items: BasketItem[]
  addItem: (item: BasketItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearBasket: () => void
  totalItems: number
  totalPrice: number
}

const BasketContext = createContext<BasketContextType | undefined>(undefined)

export const useBasket = () => {
  const context = useContext(BasketContext)
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider")
  }
  return context
}

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<BasketItem[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem("basketItems")
    if (storedItems) {
      setItems(JSON.parse(storedItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(items))
  }, [items])

  const addItem = (newItem: BasketItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearBasket = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <BasketContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearBasket, totalItems, totalPrice }}>
      {children}
    </BasketContext.Provider>
  )
}

