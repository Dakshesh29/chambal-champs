"use client"

import { Button } from "@/components/ui/button"
import { CartDrawer } from "./cart-drawer"
import { CartBadge } from "./cart-badge"

export function CartButton() {
  return (
    <CartDrawer>
      <Button variant="ghost" size="icon">
        <CartBadge />
      </Button>
    </CartDrawer>
  )
}
