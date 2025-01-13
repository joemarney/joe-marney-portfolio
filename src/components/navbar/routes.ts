//! Imports
import { PiChatCircleBold } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";

export const routes = [
  {
    title: "about",
    to: "about",
    Icon: BiUser,
  },
  {
    title: "projects",
    to: "projects",
    Icon: IoLibraryOutline,
  },
  {
    title: "contact",
    to: "contact",
    Icon: PiChatCircleBold,
  },
];
