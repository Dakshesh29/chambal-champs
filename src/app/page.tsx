import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-stone-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              
              <h1 className="relative w-fit tracking-tight text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                The Spirit of the <span className="bg-primary px-2 text-white">Ravines</span>
              </h1>
              
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-gray-700">
                Welcome to <span className="font-semibold">ChambalChamps</span>. 
                Customize your own rugged jersey or discover authentic regional handicrafts. 
                Wear the legend.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  Premium Cotton Fabrics
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  Authentic Chambal Art Styles
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  5-Year Print Durability Guarantee
                </li>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto sm:mx-0 w-full sm:w-auto",
                  })}
                >
                  Create Your Jersey <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
                
                <Link
                  href="/shop"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "mx-auto sm:mx-0 w-full sm:w-auto",
                  })}
                >
                  View Souvenirs
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Hero Image */}
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
               {/* Note: Ensure 'tshirt-hero.png' is in your public folder! */}
               {/* If image is missing, the alt text will show. It won't crash. */}
               <Image 
                  src="/tshirt-hero.png" 
                  alt="Chambal Jersey" 
                  width={400}
                  height={500}
                  className="rounded-lg shadow-2xl ring-1 ring-gray-900/10"
                  priority
               />
            </div>
          </div>

        </MaxWidthWrapper>
      </section>
    </div>
  );
}