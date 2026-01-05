import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/providers/cart-provider"

export const metadata: Metadata = {
  title: "ChambalChamps",
  description: "Rugged heritage of Chambal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
