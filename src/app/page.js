import Image from "next/image";
import logo from "./assets/logo.gif";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col items-center justify-center py-16 ">
        <Image src={logo} alt="logo" width={400} height={400} priority className="hover:blur-sm transition duration-500"/>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="flex gap-16">
          <Link href="/products">
            <button className="relative group font-mono text-xl text-gray-200 px-6 py-3   rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              Apparel
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
          <Link href="/videos">
            <button className="relative group font-mono text-xl text-gray-200 px-6 py-3  rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              Videos
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}
