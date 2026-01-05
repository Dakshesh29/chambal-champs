import Image from "next/image"
import Link from "next/link"

export default function ProductCard({
  product,
}: {
  product: any
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group rounded-xl border bg-background p-4 transition hover:shadow-md"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-sm text-muted-foreground">
        {product.category.name}
      </p>

      <p className="mt-2 font-bold text-ravineClay">
        ₹{product.basePrice}
      </p>
    </Link>
  )
}
