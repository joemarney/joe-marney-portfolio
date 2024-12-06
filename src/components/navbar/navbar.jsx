//! Imports
import { useState, useEffect } from "react";

//! Components
import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 bg-theme-background border-b border-theme-borders z-50 transition-transform duration-300 ${isVisible ? "transform translate-y-0" : "transform -translate-y-full"}`}>
      <nav className="container flex items-center justify-around py-1 lg:py-5">
        <div className="text-lg">Joe Marney</div>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
}
