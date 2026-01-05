"use client"

import { useState } from "react"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"
import { CartItem } from "@/lib/cart/cart-types"

interface ProductActionsProps {
  product: {
    id: string
    slug: string
    name: string
    price: number
    image: string
    sizes?: string[]
    colors?: string[]
  }
}

export function ProductActions({ product }: ProductActionsProps) {
  const [size, setSize] = useState<string | undefined>()
  const [color, setColor] = useState<string | undefined>()

  const cartItem: CartItem = {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
    variant: { size, color },
  }

  return (
    <div className="space-y-4">
      {/* Size selector */}
      {product.sizes && (
        <div className="flex gap-2">
          {product.sizes.map(s => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1 border rounded ${
                size === s ? "border-black" : "border-muted"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Color selector */}
      {product.colors && (
        <div className="flex gap-2">
          {product.colors.map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`px-3 py-1 border rounded ${
                color === c ? "border-black" : "border-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <AddToCartButton item={cartItem} />
    </div>
  )
}
