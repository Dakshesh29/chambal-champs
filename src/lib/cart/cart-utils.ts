import { CartItem } from "./cart-types"

export function isSameCartItem(a: CartItem, b: CartItem) {
  return (
    a.id === b.id &&
    a.variant.size === b.variant.size &&
    a.variant.color === b.variant.color
  )
}

export function getCartTotal(items: CartItem[]) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
}

export function getCartCount(items: CartItem[]) {
  return items.reduce((count, item) => count + item.quantity, 0)
}
