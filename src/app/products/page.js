import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsContainer from "../components/ProductsContainer";

export default function ProductsPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <ProductsContainer />
      <Footer />
    </div>
  );
}
