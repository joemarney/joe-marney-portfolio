//! Imports
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

//! Routes
import { routes } from "./routes";

export const NavMobile = ({ scrollTo, setIsNavbarVisible }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#EAEAEA" />
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-8 bg-theme-background2">
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon, to, title } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={title}
                    className="w-full text-theme-words transition-all duration-300 hover:text-theme-hover"
                  >
                    <Link
                      onClick={() => {
                        scrollTo(to);
                        setOpen((prev) => !prev);
                        setTimeout(() => setIsNavbarVisible(false), 500);
                      }}
                      className={"flex items-center justify-center w-full p-5 rounded-xl cursor-pointer"}
                      duration={500}
                    >
                      <Icon className="text-xl mx-5" />
                      <span className="text-lg">{title}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
