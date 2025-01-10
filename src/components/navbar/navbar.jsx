//! Components
import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";

export default function NavBar({ scrollTo, isNavbarVisible, setIsNavbarVisible }) {
  return (
    <div className={`fixed top-0 left-0 right-0 bg-theme-background2 z-50 transition-transform duration-300 ${isNavbarVisible ? "transform translate-y-0" : "transform -translate-y-full"}`}>
      <nav className="container flex items-center justify-around py-1 lg:py-5">
        <NavMobile scrollTo={scrollTo} setIsNavbarVisible={setIsNavbarVisible} />
        <NavDesktop scrollTo={scrollTo} setIsNavbarVisible={setIsNavbarVisible} />
      </nav>
    </div>
  );
}
