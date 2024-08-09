import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // First user upsert
  await prisma.user.upsert({
    where: { phone: 8547516601 },
    update: {}, // No updates if the user exists
    create: {
      name: "Brijesh P Thankachan",
      phone: 8547516601,
    },
  });

  // Second user upsert with a different phone number
  await prisma.user.upsert({
    where: { phone: 8547516602 }, // Corrected phone number
    update: {}, // No updates if the user exists
    create: {
      name: "Kalla Thadichi",
      phone: 8547516602,
    },
  });
};

// Execute the main function
main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error("Error while seeding database:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
