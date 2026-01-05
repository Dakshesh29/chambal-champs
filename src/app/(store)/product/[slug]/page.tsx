import { getProductBySlug } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { ProductActions } from "./_components/product-actions"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | ChambalChamps",
    }
  }

  return {
    title: `${product.name} | ChambalChamps`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        
        {/* Product Image */}
        <div>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={600}
            height={600}
            priority
            className="rounded-xl border bg-background"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold">
              {product.name}
            </h1>
          </div>

          <p className="text-2xl font-semibold">
            ₹{product.price}
          </p>

          <p className="leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Product Actions (Variants + Add to Cart) */}
          <ProductActions
            product={{
              id: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.images[0],
              sizes: product.variants?.size,
              colors: product.variants?.color,
            }}
          />
        </div>
      </div>
    </div>
  )
}
