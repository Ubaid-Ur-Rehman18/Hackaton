"use client";

import React, { useEffect, useState } from "react";
import SanityClient from "@sanity/client";
import Image from "next/image";
import { product } from "@/sanity/schemaTypes/product";

const sanity = SanityClient({
    projectId: "o3uphmtx",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-01",
});

interface ProductType {
    id: string;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    discountpercentage: number;
    productImage: {
        asset: {
            _ref: string;
        }
    };
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [cart, setCart] = useState<ProductType[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
              *[_type == "product"] {
                id,
                title,
                price,
                description,
                imageUrl,
                discountpercentage,
                productImage {
                    asset->{ _ref }
                },
                tags
              }
            `;
            const data = await sanity.fetch(query);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addToCart = (product: ProductType) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`);
    };

    const truncateDescription = (description: string) => {
        return description.length > 50 ? description.substring(0, 50) + "..." : description;
    };

    useEffect(() => {
        fetchProducts();
    }, []);

  

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API Data</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-l gap-4 hover:shadow-lg transition-shadow duration-300">
                        
                        <Image src={product.imageUrl} alt={product.title} width={300} height={300} className="w-full h-48 object-cover rounded-md" />
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-slate-600 font-bold">${product.price}</p>
                                    {product.discountpercentage > 0 && (
                                        <p className="text-sm text-green-600">{product.discountpercentage}% Off</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.tags.map((tag, index) => (
                                    <span key={index} className="text-xs bg-slate-400 text-black rounded-full px-2 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button onClick={() => addToCart(product)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                                <div>
                                    <p className="font-medium text-slate-900">{item.title}</p>
                                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                                    <Image src={item.imageUrl} alt={item.title} width={50} height={50} className="rounded-md" />
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-black">Your cart is empty, please add products.</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    