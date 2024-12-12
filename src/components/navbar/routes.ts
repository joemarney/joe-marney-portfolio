//! Imports
// import { BiWrench } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";

export const routes = [
  {
    title: "About",
    to: "about",
    Icon: BiUser,
  },
  {
    title: "Projects",
    to: "projects",
    Icon: IoLibraryOutline,
  },
  {
    title: "Contact",
    to: "contact",
    Icon: PiChatCircleBold,
  },
];
