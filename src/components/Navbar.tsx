import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const isAdmin = user?.email === process.env.ADMIN_EMAIL // We will set this later

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          
          <Link href="/" className="flex z-40 font-bold text-xl text-primary tracking-tight">
            Chambal<span className="text-secondary">Champs</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            
            <Link href="/shop" className={buttonVariants({ size: "sm", variant: "ghost" })}>
               Shop <ShoppingBag className="ml-1 h-4 w-4"/>
            </Link>

            {user ? (
              <>
                <Link href="/api/auth/logout" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Sign out
                </Link>
                {/* Only show dashboard if user is logged in */}
                {isAdmin ? (
                   <Link href="/dashboard" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                    Dashboard
                   </Link>
                ) : null}
              </>
            ) : (
              <>
                <Link href="/api/auth/register" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Sign up
                </Link>
                <Link href="/api/auth/login" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1 bg-primary text-white hover:bg-primary/90",
                  })}
                >
                  Create Jersey
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar