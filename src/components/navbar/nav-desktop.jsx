//! Imports
import { Link } from "react-router-dom";

//! Routes
import { routes } from "./routes";

export const NavDesktop = ({ scrollTo, setIsNavbarVisible }) => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-12 text-md text-theme-words">
      {routes.map((route) => {
        const { Icon, to, path, title } = route;

        return (
          <li key={title}>
            {path ? (
              <Link to={path} className="flex items-center gap-1 hover:text-theme-hover transition-all cursor-pointer">
                <Icon />
                {title}
              </Link>
            ) : (
              <button
                onClick={() => {
                  scrollTo(to);
                  setTimeout(() => setIsNavbarVisible(false), 500);
                }}
                className="flex items-center gap-1 hover:text-theme-hover transition-all cursor-pointer bg-transparent border-none"
              >
                <Icon />
                {title}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
