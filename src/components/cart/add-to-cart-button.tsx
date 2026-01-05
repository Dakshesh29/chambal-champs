"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { CartItem } from "@/lib/cart/cart-types"

interface AddToCartButtonProps {
  item: CartItem
}

export function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addItem } = useCart()

  return (
    <Button
      className="w-full"
      onClick={() => addItem(item)}
    >
      Add to Cart
    </Button>
  )
}
