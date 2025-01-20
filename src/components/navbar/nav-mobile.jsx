//! Imports
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

//! Animations
import Wrapper from "../animations/wrapper";

//! Routes
import { routes } from "./routes";

export const NavMobile = ({ scrollTo, setIsNavbarVisible }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#EAEAEA" />
      <AnimatePresence>
        {isOpen && (
          <Wrapper
            animation={{
              initial: { opacity: 0, y: -50 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -50 },
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-8 bg-theme-background2 z-50"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon, to, title } = route;

                return (
                  <Link
                    key={idx}
                    className=" text-theme-words transition-all duration-300 hover:text-theme-hover flex items-center justify-center p-5 cursor-pointer"
                    onClick={() => {
                      scrollTo(to);
                      setOpen(false);
                      setTimeout(() => setIsNavbarVisible(false), 500);
                    }}
                  >
                    <Icon className="text-xl mx-5" />
                    <span className="text-lg">{title}</span>
                  </Link>
                );
              })}
            </ul>
          </Wrapper>
        )}
      </AnimatePresence>
    </div>
  );
};
