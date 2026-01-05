"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { getCartCount } from "@/lib/cart/cart-utils"

export function CartBadge() {
  const { items } = useCart()
  const count = getCartCount(items)

  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-xs text-white">
          {count}
        </span>
      )}
    </div>
  )
}
