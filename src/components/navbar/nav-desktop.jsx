//! Imports
import { Link } from "react-router-dom";

//! Routes
import { routes } from "./routes";

export const NavDesktop = ({ scrollTo, setIsNavbarVisible }) => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-12 text-md text-theme-words">
      {routes.map((route) => {
        const { Icon, to, title } = route;
        return (
          <li key={title}>
            <Link
              onClick={() => {
                scrollTo(to);
                setTimeout(() => setIsNavbarVisible(false), 500);
              }}
              duration={500}
              className="flex items-center gap-1 hover:text-theme-hover transition-all cursor-pointer"
            >
              <Icon />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
