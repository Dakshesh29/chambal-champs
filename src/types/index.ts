export interface ProductVariant {
  size?: string[]
  color?: string[]
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  images: string[]
  category: string
  variants?: ProductVariant
}
