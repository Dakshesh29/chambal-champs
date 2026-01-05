import { CartState } from "./cart-types"

const CART_KEY = "chambalchamps-cart"

export function loadCart(): CartState {
  if (typeof window === "undefined") {
    return { items: [] }
  }

  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : { items: [] }
  } catch {
    return { items: [] }
  }
}

export function saveCart(cart: CartState) {
  if (typeof window === "undefined") return
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}
