import React, { useEffect, useState } from "react";
import NonScrollerNavbar from "./NonScrollerNavbar";
import Navbar2 from "./Navbar2";

export default function Navbar() {
  const [hideTopNavbar, setHideTopNavbar] = useState(false);
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      // Hide top navbar as soon as scrolling starts
      if (scrollTop > 0) {
        setHideTopNavbar(true);
      } else {
        setHideTopNavbar(false);
      }

      // Show second navbar after 10% scroll
      setShowSecondNavbar(scrollPercent > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NonScrollerNavbar: shows at first, hides on scroll */}
      {!hideTopNavbar && (
        <div className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
          <NonScrollerNavbar />
        </div>
      )}

      {/* Navbar2: only fades in after 10% scroll */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showSecondNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar2 />
      </div>
    </>
  );
}
