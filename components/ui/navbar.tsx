import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Replace with your logo */}
              <Link href="/">
                <p className="text-white font-bold text-lg">Logo</p>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </p>
              </Link>
              <Link href="/services">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
              {/* Add more links as needed */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
