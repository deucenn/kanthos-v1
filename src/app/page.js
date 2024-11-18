import Image from "next/image";
import logo from "./assets/logo.gif";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src={logo} alt="logo" width={500} height={500} priority />
      <div className="mt-14 gap-7 grid grid-cols-2 md:gap-36">
        <button className="relative group text-slate-200 font-mono px-6 py-2 0">
          <Link href="/products">Apparel</Link>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-200 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="relative group text-slate-200 font-mono px-6 py-2 0">
          <Link href="/videos">Videos</Link>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-200 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
      <Footer />
    </div>
  );
}
