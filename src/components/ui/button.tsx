import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:opacity-90 disabled:opacity-50",
          size === "default" && "h-10 px-4",
          size === "lg" && "h-12 px-6 text-base",
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
