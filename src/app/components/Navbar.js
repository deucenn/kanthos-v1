import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" shadow-sm">
      <ul className="grid grid-cols-3 gap-6 text-center py-4 font-lamebrains tracking-wide text-3xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Apparel</Link>
        </li>
        <li>
          <Link href="/videos">Videos</Link>
        </li>
      </ul>
    </nav>
  );
}
