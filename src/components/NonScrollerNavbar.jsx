import { Link } from "react-router-dom";
import BlackLogo from "../assets/images/Logo/risezonic logo (1).png";
import { useLocation } from "react-router-dom";

export default function NonScrollerNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <header>
      {/* Main Navbar */}
      <nav className=" text-white px-4 py-6 w-full fixed top-0 z-50 header1 font-body ">
        <div className=" mx-auto flex justify-between items-center sm:px-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">
              <img loading="lazy" className="w-42" src={BlackLogo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-between space-x-4 ">
            <ul className="md:flex hidden space-x-6">
              <li>
                <Link
                  to="/"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/") ? "text-amber-400 font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/about-us") ? "text-amber-400 font-semibold" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/what-we-do")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/our-services"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/our-services")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="https://ai.risezonic.com/"
                  target="blank"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/airisezonic")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  Ai Risezonic
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/contact-us")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/blogs") ? "text-amber-400 font-semibold" : ""
                  }`}
                >
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
