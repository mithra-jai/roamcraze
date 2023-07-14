// Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} RoamCraze. All rights reserved.
        </p>
        <nav className="mt-2">
          <Link legacyBehavior href="/about">
            <a className="mr-4 text-gray-600 hover:text-gray-800">About</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="mr-4 text-gray-600 hover:text-gray-800">Contact</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
