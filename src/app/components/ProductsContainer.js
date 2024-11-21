"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://kanthos-backend.onrender.com/api/products"
        );
        const result = await res.json();
        // .filter for visible true
        const printifyData = result.data.filter(
          (product) => product.visible === true
        );

        if (printifyData?.data?.length > 0) {
          setProducts(printifyData.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 font-mono">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <Image
                src={product.images[0].src}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

// UI like this https://ui.aceternity.com/components/apple-cards-carousel
