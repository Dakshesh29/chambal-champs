export interface CartVariant {
  size?: string
  color?: string
}

export interface CartItem {
  id: string              // productId
  slug: string
  name: string
  price: number
  image: string
  variant: CartVariant
  quantity: number
}

export interface CartState {
  items: CartItem[]
}
