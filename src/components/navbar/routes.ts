//! Imports
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { PiSmileyFill } from "react-icons/pi";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";

export const routes = [
  {
    title: "skills",
    to: "skills",
    Icon: FaScrewdriverWrench,
  },
  {
    title: "projects",
    to: "projects",
    Icon: IoLibrary,
  },
  {
    title: "about",
    to: "about",
    Icon: BiSolidUser,
  },
  {
    title: "hobbies",
    to: "hobbies",
    Icon: PiSmileyFill,
  },
  {
    title: "contact",
    to: "contact",
    Icon: PiChatCircleDotsFill,
  },
  {
    title: "blog",
    path: "/blog/pc-build",
    Icon: FaLightbulb,
  },
];
