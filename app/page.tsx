import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

type ProductsWithCategories = Prisma.ProductGetPayload<
    typeof productsWithCategories
>;

type CategoriesWithItemsAndProducts = Prisma.CategoryGetPayload<
    typeof categoriesWithItemsAndProducts
>;

const productsWithCategories = Prisma.validator<Prisma.ProductArgs>()({
    include: {
        category: true,
    },
});

const categoriesWithItemsAndProducts = Prisma.validator<Prisma.CategoryArgs>()({
    include: {
        items: true,
        products: true,
    },
});

export default async function Home() {
    const categories = await prisma.category.findMany();
    const products = await prisma.product.findMany();
    const items = await prisma.item.findMany();

    const prodAndCats: ProductsWithCategories[] = await prisma.product.findMany(
        {
            include: {
                category: true,
            },
        }
    );

    const catsWithItemsAndProducts: CategoriesWithItemsAndProducts[] =
        await prisma.category.findMany({
            include: {
                items: true,
                products: true,
            },
        });

    return (
        <main className="flex gap-4 flex-wrap flex-row">
            <div className="grid grid-cols-2 gap-4">
                <h2 className="col-span-2">Categories</h2>
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-slate-700 rounded shadow p-4"
                    >
                        <h1>{category.name}</h1>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <h2 className="col-span-2">
                    Categories with Items and Products
                </h2>
                {catsWithItemsAndProducts.map((category) => (
                    <div
                        key={category.id}
                        className="bg-slate-700 rounded shadow p-4"
                    >
                        <h1>{category.name}</h1>
                        <p>{category.description}</p>
                        {category.items && (
                            <div>
                                <h2>Items</h2>
                                {category.items.map((item) => (
                                    <div key={item.id}>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {category.products && (
                            <div>
                                <h2>Products</h2>
                                {category.products.map((product) => (
                                    <div key={product.id}>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <h2 className="col-span-2">Products</h2>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-slate-700 rounded shadow p-4"
                    >
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.category_id}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <h2 className="col-span-2">Items</h2>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-slate-700 rounded shadow p-4"
                    >
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>{item.category_id}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <h2 className="col-span-2">Products with Cats</h2>
                {prodAndCats.map((product) => (
                    <div
                        key={product.id}
                        className="bg-slate-700 rounded shadow p-4"
                    >
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        {product.category && <p>{product.category.name}</p>}
                    </div>
                ))}
            </div>
        </main>
    );
}
