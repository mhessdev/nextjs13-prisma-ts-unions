const { Prisma } = require("@prisma/client");

const categories = [
    {
        name: "Hats",
        description: "Things you can wear on your head",
    },
    {
        name: "Socks",
        description: "Things you can wear on your feet",
    },
    {
        name: "Shirts",
        description: "Things you wear on the top half of your body",
    },
];

const products = [
    {
        name: "Cool helmet.",
        description: "A nice helmet to wear on your head",
        price: new Prisma.Decimal(19.95),
        image: "/images/helmet.jpg",
        category_id: 1,
    },
    {
        name: "Grey T-Shirt",
        description: "A nice shirt that you can wear on your body",
        price: new Prisma.Decimal(22.95),
        image: "/images/shirt.jpg",
        category_id: 3,
    },
    {
        name: "Socks",
        description: "Cool socks that you can wear on your feet",
        price: new Prisma.Decimal(12.95),
        image: "/images/socks.jpg",
        category_id: 2,
    },
    {
        name: "Sweatshirt",
        description: "Cool sweatshirt that you can wear on your body",
        price: new Prisma.Decimal(12.95),
        image: "/images/sweatshirt.jpg",
        category_id: 3,
    },
];

const items = [
    {
        name: "Snapback Hat",
        description:
            "This stylish snapback hat is made from high-quality materials .",
        price: new Prisma.Decimal(24.99),
        image: "/cap-1650719__480.jpg",
        category_id: 1,
    },
    {
        name: "Crew Socks",
        description:
            "These comfortable crew socks are perfect for everyday wear.",
        price: new Prisma.Decimal(9.99),
        image: "/socks-3338799__480.jpg",
        category_id: 2,
    },
    {
        name: "Graphic T-Shirt",
        description: "This stylish graphic t-shirt is made from 100% cotton.",
        price: new Prisma.Decimal(19.99),
        image: "/t-shirt-2332063__480.jpg",
        category_id: 3,
    },
    {
        name: "Knit Beanie",
        description:
            "Stay warm and stylish this winter with this cozy knit beanie.",
        price: new Prisma.Decimal(14.99),
        image: "/hat-1031100__480.jpg",
        category_id: 1,
    },
    {
        name: "Striped Dress Socks",
        description: "Add a touch of sophistication to your wardrobe",
        price: new Prisma.Decimal(12.99),
        image: "/socks-60711__480.jpg",
        category_id: 2,
    },
];

module.exports = {
    products,
    categories,
    items,
};
