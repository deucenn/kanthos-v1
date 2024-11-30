"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";
import { AddShoppingCart, ShoppingCart } from "@mui/icons-material";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cartAmount, setCartAmount] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product) => {
    setCartAmount((prevAmount) => prevAmount + 1);
    console.log(`Added ${product.title} to the cart.`);
    setShoppingCart((prevCart) => [ ...prevCart, {
      id: product.id, 
      title: product.title, 
      price: product.variants[0]?.price, 
      image: product.images[0]?.src,
    }]);
  };

  useEffect(() => {
    console.log("Shopping Cart updated:", shoppingCart);
  }, [shoppingCart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.time("Fetching products");
        const res = await fetch(
          "https://kanthos-backend.onrender.com/api/products"
        );
        console.timeEnd("Fetching products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const result = await res.json();

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
      <div className="font-sans flex justify-end items-center mb-2">
        <button className="flex items-center gap-2  p-2 rounded-full hover:bg-slate-500 hover:animate-pulse transition">
          <ShoppingCart className="mb-0" />
          <span className="text-xl bg-slate-500 text-white h-fit rounded-xl px-2">
            {cartAmount}
          </span>
        </button>
      </div>
      <h1 className="text-4xl text-center mb-8 text-slate-400 font-lamebrains">
        SHOP 2024 APPAREL
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <a
              key={product.id}
              href={product.external?.handle || "#"}
              target="_blank"
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
                  <button
                    className="text-slate-800 gap-2  p-2 rounded-full hover:bg-slate-500 transition"
                    onClick={() => addToCart(product)}
                  >
                    <AddShoppingCart />
                  </button>
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
