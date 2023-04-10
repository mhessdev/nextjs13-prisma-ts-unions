const { PrismaClient } = require("@prisma/client");
const { categories, products, items } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.product.deleteMany();
        console.log("Deleted records in product table");

        await prisma.item.deleteMany();
        console.log("Deleted records in item table");

        await prisma.category.deleteMany();
        console.log("Deleted records in category table");

        await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
        console.log("reset product auto increment to 1");

        await prisma.$queryRaw`ALTER TABLE Item AUTO_INCREMENT = 1`;
        console.log("reset category auto increment to 1");

        await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
        console.log("reset category auto increment to 1");

        await prisma.category.createMany({
            data: categories,
        });
        console.log("Added category data");

        await prisma.product.createMany({
            data: products,
        });
        console.log("Added product data");

        await prisma.item.createMany({
            data: items,
        });
        console.log("Added item data");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();
