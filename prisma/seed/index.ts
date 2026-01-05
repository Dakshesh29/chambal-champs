import "dotenv/config"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  await prisma.category.createMany({
    data: [
      {
        name: "Jersey",
        slug: "jersey",
        description: "Rugged sports jerseys inspired by Chambal warriors",
      },
      {
        name: "Cap",
        slug: "cap",
        description: "Classic caps with regional pride",
      },
      {
        name: "Souvenir",
        slug: "souvenir",
        description: "Authentic Chambal-inspired collectibles",
      },
    ],
    skipDuplicates: true,
  })

  console.log("✅ Categories seeded")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
