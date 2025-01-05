//! Imports
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

//! Routes
import { routes } from "./routes";

export const NavMobile = ({ scrollTo }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#586994" />
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-8 bg-theme-background">
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
                    className="w-full rounded-lg bg-theme-background2 text-theme-words transition-all duration-300 hover:bg-theme-hover hover:text-theme-words2"
                  >
                    <Link
                      onClick={() => {
                        scrollTo(to);
                        setOpen((prev) => !prev);
                      }}
                      className={"flex items-center justify-between w-full p-5 rounded-xl cursor-pointer"}
                      to={to}
                      duration={500}
                    >
                      <span className="flex gap-1 text-lg">{title}</span>
                      <Icon className="text-xl" />
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
