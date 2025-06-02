import { Link } from "react-router-dom";
import BlackLogo from "../assets/images/Logo/risezonic logo (1).png";
export default function NonScrollerNavbar() {
  return (
    <header>
      {/* Main Navbar */}
      <nav className=" text-white px-4 py-6 w-full fixed top-0 z-50 header1 font-body ">
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
                <Link to="/" className="hover:text-amber-400 text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-amber-400 text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-amber-400 text-lg">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="hover:text-amber-400 text-lg">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-amber-400 text-lg">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-amber-400 text-lg">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
