"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://kanthos-backend.onrender.com/api/products"
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const result = await res.json();

        // Filter products for visible === true
        const printifyData = result.data.filter(
          (product) => product.visible === true
        );

        if (printifyData.length > 0) {
          setProducts(printifyData);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 font-mono">
      <h1 className="text-4xl text-center mb-8 text-slate-200 font-extralight">
        SHOP 2024 APPAREL
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <a
              key={product.id}
              href={product.external?.handle || "#"} 
              className="block"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-200 cursor-pointer">
                <Image
                  src={product.images[0]?.src || "/placeholder.png"}
                  alt={product.title}
                  width={300}
                  height={500}
                  className="w-full h-72 object-cover rounded-t-lg brightness-75"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    ${String(product.variants[0]?.price)?.slice(0, -2) || "N/A"}
                  </p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

// UI like this https://ui.aceternity.com/components/apple-cards-carousel
