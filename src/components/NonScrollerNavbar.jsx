export default function NonScrollerNavbar() {
  return (
    <header>
      {/* Main Navbar */}
      <nav className=" text-white px-4 py-6 w-full fixed top-0 z-50 header1 ">
        <div className=" mx-auto flex justify-between items-center sm:px-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img
              className="w-42"
              src="https://www.webeesocial.com/wp-content/uploads/2020/12/logo-tm-compressed.png"
              alt="logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-between space-x-4 ">
            <ul className="md:flex hidden space-x-6">
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  News and Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
