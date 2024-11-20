"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://kanthos-backend.onrender.com/api/products");
        const printifyData = await res.json();

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
    <div className="grid grid-cols-5 mt-80 h-screen">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <Image
              src={product.images[0]?.src}
              alt={product.name || "Product Image"}
              width={300}
              height={300}
            />
            <p>{product.external?.handle}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

// UI like this https://ui.aceternity.com/components/apple-cards-carousel
