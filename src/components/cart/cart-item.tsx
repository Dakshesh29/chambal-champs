"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/lib/cart/cart-types"
import { useCart } from "@/hooks/use-cart"

interface CartItemRowProps {
  item: CartItem
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center gap-4">
      <Image
        src={item.image}
        alt={item.name}
        width={64}
        height={64}
        className="rounded-md border"
      />

      <div className="flex-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">
          {item.variant.size} / {item.variant.color}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              updateQuantity(item, Math.max(1, item.quantity - 1))
            }
          >
            −
          </Button>

          <span className="w-6 text-center">{item.quantity}</span>

          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              updateQuantity(item, item.quantity + 1)
            }
          >
            +
          </Button>
        </div>
      </div>

      <div className="space-y-2 text-right">
        <p className="font-medium">
          ₹{item.price * item.quantity}
        </p>

        <button
          onClick={() => removeItem(item)}
          className="text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
