import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-2 flex justify-around items-center  bg-white">
      <Link href="/">
        <div className="text-blue-600 font-bold font-mono">My-Blog</div>
      </Link>
      <div className="nav flex">
        <Link
          className="text-blue-600 hover:text-blue-800 font-semibold"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-blue-600 hover:text-blue-800 font-semibold"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-blue-600 hover:text-blue-800 font-semibold"
          href="/contact"
        >
          Privacy Policy
        </Link>
      </div>
    </header>
  );
}
