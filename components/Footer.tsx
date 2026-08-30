import Link from "next/link";
import { CITIES } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-char-900 text-char-100 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display font-700 text-white text-lg">
            MakeMy<span className="text-oil-500">Roof</span>New
          </p>
          <p className="mt-3 text-sm text-char-300">
            Restore. Protect. Save. A smarter alternative to full roof replacement.
          </p>
          <a href="tel:2105557663" className="mt-4 inline-block text-oil-500 font-medium">
            (210) 555-ROOF
          </a>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Company</p>
          <ul className="space-y-2 text-sm text-char-300">
            <li><Link href="/how-it-works" className="hover:text-white">How it works</Link></li>
            <li><Link href="/about" className="hover:text-white">About / Uncle Morty</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Before &amp; after</Link></li>
            <li><Link href="/blog" className="hover:text-white">Learning hub</Link></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2">
          <p className="text-sm font-medium text-white mb-3">Service areas</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-char-300">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="hover:text-white">
                  {c.name}, {c.stateAbbr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-char-700">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between text-xs text-char-300 gap-2">
          <p>&copy; {new Date().getFullYear()} MakeMyRoofNew. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
