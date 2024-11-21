import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsContainer from "../components/ProductsContainer";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className=" w-full py-4">
        <Navbar />
      </header>

      {/* ProductsContainer */}
      <main className="flex-grow -50 py-8">
        <ProductsContainer />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}

