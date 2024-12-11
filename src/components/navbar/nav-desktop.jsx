//! Imports
import { Link } from "react-scroll";

//! Routes
import { routes } from "./routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-12 text-sm">
      {routes.map((route) => {
        const { Icon, to, title } = route;
        return (
          <li key={title}>
            <Link to={to} smooth={true} duration={500} className="flex items-center gap-1 hover:text-theme-hover transition-all cursor-pointer">
              <Icon />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
