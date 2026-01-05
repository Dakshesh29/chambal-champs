import { Product } from "@/types"

export const products: Product[] = [
  {
    id: "1",
    name: "The Bandit Jersey",
    slug: "bandit-jersey",
    description:
      "Inspired by the rugged spirit of the Chambal Valley. Built for those who carry history with pride.",
    price: 1499,
    images: ["/products/bandit-jersey.jpg"],
    category: "Jersey",
    variants: {
      size: ["S", "M", "L", "XL"],
      color: ["Clay", "Blue"],
    },
  },
]

export async function getShopProducts(): Promise<Product[]> {
  return products
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null
}
