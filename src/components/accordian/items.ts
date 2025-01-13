//! Imports
import { IoGameControllerOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { PiPersonSimpleWalkLight } from "react-icons/pi";
import { PiPersonSimpleWalkFill } from "react-icons/pi";
import { TbCampfire } from "react-icons/tb";
import { TbCampfireFilled } from "react-icons/tb";

export const items = [
  {
    title: "gaming",
    content: "As long as I can remember, I have always had a controller in my hands! I love the Dark Souls series and am currently playing DS2. My favorite games of all time are: Minecraft, Elden Ring, Dark Souls 3, Pokémon Emerald, and Pokémon Platinum.",
    img: "src/assets/images/pegi3.jpeg",
    Extend: IoGameController,
    Collapse: IoGameControllerOutline,
  },
  {
    title: "hiking",
    content: "Growing up we pretty much exclusively holidayed in England. I have visited places of astonishing beauty and hiked all over. The tallest mountains I have climbed so far are: Yr Wyddfa, Scafell Pike, and Ben Nevis. It has been a dream of mine to climb Mount Kilimanjaro ever since I first learned about it. I have also been to America where I have hiked in the Grand Canyon and Yosemite Falls. I am very keen to go back out there!",
    img: "src/assets/images/grandcanyonme.jpg",
    Extend: PiPersonSimpleWalkFill,
    Collapse: PiPersonSimpleWalkLight,
  },
  {
    title: "camping",
    content: "Every time we come back from camping, I am thinking about the next time! My friends and I have stayed in forests all over England and Wales, stretching from the Peak District to the South Downs. Next stop has got to be the Lake District!",
    Extend: TbCampfireFilled,
    Collapse: TbCampfire,
  },
];
