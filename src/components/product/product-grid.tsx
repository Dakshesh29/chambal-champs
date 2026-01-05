import ProductCard from "./product-card"

export default function ProductGrid({
  products,
}: {
  products: any[]
}) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No products available.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
