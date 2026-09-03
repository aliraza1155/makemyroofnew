import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/locations/dallas-fort-worth-tx", label: "Locations" },
  { href: "/gallery", label: "Before & after" },
  { href: "/reviews", label: "Our promise" },
  { href: "/about", label: "Uncle Morty" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-char-100">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="MakeMyRoofNew" width={180} height={49} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-char-700 hover:text-moss-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:2105557663"
            className="hidden sm:block text-sm font-medium text-char-900"
          >
            (210) 555-ROOF
          </a>
          <Link
            href="/contact"
            className="bg-moss-600 hover:bg-moss-700 text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors"
          >
            Free roof check
          </Link>
        </div>
      </div>
    </header>
  );
}
