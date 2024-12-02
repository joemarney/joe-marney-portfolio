//! Imports
import { BiHomeAlt2 } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";
import { BiUser } from "react-icons/bi";

export const routes = [
  {
    title: "Home",
    to: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Contact",
    to: "/contact",
    Icon: PiChatCircleBold,
  },
  {
    title: "About",
    to: "/about",
    Icon: BiUser,
  },
];
