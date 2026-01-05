"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { getCartTotal } from "@/lib/cart/cart-utils"
import { CartItemRow } from "./cart-item"

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { items, clearCart } = useCart()
  const total = getCartTotal(items)

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto py-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={`${item.id}-${item.variant.size}-${item.variant.color}`}
                item={item}
              />
            ))
          )}
        </div>

        <div className="space-y-4 border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <Button className="w-full" disabled>
            Checkout (Coming Soon)
          </Button>

          {items.length > 0 && (
            <Button
              variant="ghost"
              className="w-full"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
