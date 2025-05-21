import { Link } from "react-router-dom";
import BlackLogo from "../assets/images/Logo/risezonic logo (1).png";
export default function NonScrollerNavbar() {
  return (
    <header>
      {/* Main Navbar */}
      <nav className=" text-white px-4 py-6 w-full fixed top-0 z-50 header1 ">
        <div className=" mx-auto flex justify-between items-center sm:px-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">
              <img className="w-42" src={BlackLogo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-between space-x-4 ">
            <ul className="md:flex hidden space-x-6">
              <li>
                <a href="/about-us" className="hover:text-amber-400 text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 text-lg">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 text-lg">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 text-lg">
                  News and Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 text-lg">
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
