import { getShopProducts } from "@/lib/products"

import ProductGrid from "@/components/product/product-grid"

export default async function ShopPage() {
  const products = await getShopProducts()

  return (
    <section className="container py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-ravineClay">
          Shop
        </h1>
        <p className="text-muted-foreground">
          Explore authentic Chambal merchandise
        </p>
      </header>

      <ProductGrid products={products} />
    </section>
  )
}
