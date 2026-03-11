export default function PureNavbar({ preview = false }) {

  return (
    <nav className="bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="text-lg font-bold text-gray-900">
            MyBrand
          </div>

          {/* LINKS */}
          <ul className="flex items-center gap-8 text-sm text-gray-600">

            <li>
              <a href="#" className="hover:text-black transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-black transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-black transition">
                Blog
              </a>
            </li>

          </ul>

          {/* BUTTON */}
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Contact
          </button>

        </div>

      </div>

    </nav>
  );
}