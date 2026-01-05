"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CartItem, CartState } from "@/lib/cart/cart-types"
import { loadCart, saveCart } from "@/lib/cart/cart-storage"
import { isSameCartItem } from "@/lib/cart/cart-utils"

interface CartContextValue {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  updateQuantity: (item: CartItem, qty: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartState>({ items: [] })

  useEffect(() => {
    setCart(loadCart())
  }, [])

  useEffect(() => {
    saveCart(cart)
  }, [cart])

  function addItem(item: CartItem) {
    setCart(prev => {
      const existing = prev.items.find(i => isSameCartItem(i, item))

      if (existing) {
        return {
          items: prev.items.map(i =>
            isSameCartItem(i, item)
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      }

      return { items: [...prev.items, item] }
    })
  }

  function removeItem(item: CartItem) {
    setCart(prev => ({
      items: prev.items.filter(i => !isSameCartItem(i, item)),
    }))
  }

  function updateQuantity(item: CartItem, qty: number) {
    setCart(prev => ({
      items: prev.items.map(i =>
        isSameCartItem(i, item) ? { ...i, quantity: qty } : i
      ),
    }))
  }

  function clearCart() {
    setCart({ items: [] })
  }

  return (
    <CartContext.Provider
      value={{ items: cart.items, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
