//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, MongodbOriginal, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, FigmaOriginal, NetlifyOriginal, HerokuOriginal } from "devicons-react";
import { SiExpress } from "react-icons/si";

//! Thumbnails
import mastermindthumb from "../../assets/images/mastermind.png";
import beastyncthumb from "../../assets/images/beatsync.png";
import lapthumb from "../../assets/images/lifesapitch.png";
import repottedthumb from "../../assets/images/repotted.png";

//! GIFs
import mastermindgif from "../../assets/images/mastermind.gif";
import beatsyncgif from "../../assets/images/beatsync.gif";
import lapgif from "../../assets/images/lap.gif";
import repottedgif from "../../assets/images/repotted.gif";

export const projects = [
  {
    title: "Mastermind",
    description: "Code cracking game",
    thumbnail: mastermindthumb,
    video: mastermindgif,
    timescale: "Solo - 7 days",
    gitHubLink: "https://github.com/joemarney/unit-1-project-mastermind",
    deployedLink: "https://joemarney.github.io/unit-1-project-mastermind/",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: Html5Original, label: "HTML" },
      { Icon: Css3Original, label: "CSS" },
      { Icon: JavascriptOriginal, label: "JavaScript" },
    ],
    inDepthDescription: "During the second week of my course, I developed a browser-based version of the iconic board game Mastermind in just seven days, despite having only one week of programming experience. The game includes win/loss logic, an intuitive user interface, and nostalgic audio from the original 1970 advertisement. This project tested my technical skills and perseverance, and completing it was a turning point in my journey, teaching me resilience and the value of embracing challenges.\nRead more about it on my LinkedIn or GitHub!",
  },
  {
    title: "Beatsync",
    description: "Rate music venues",
    thumbnail: beastyncthumb,
    video: beatsyncgif,
    timescale: "Solo - 7 days",
    gitHubLink: "https://github.com/joemarney/unit-2-project-beatsync",
    deployedLink: "https://projectbeatsync.netlify.app/",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: Html5Original, label: "HTML" },
      { Icon: Css3Original, label: "CSS" },
      { Icon: JavascriptOriginal, label: "JavaScript" },
      { Icon: NodejsOriginal, label: "Node.js" },
      { Icon: SiExpress, label: "Express" },
      { Icon: MongodbOriginal, label: "MongoDB" },
      { Icon: NetlifyOriginal, label: "Netlify" },
    ],
    inDepthDescription: "Beatsync is a full MEN stack application (MongoDB, Express, Node.js) that allows music lovers to rate and review venues, helping others make informed decisions. It features full CRUD functionality, session-based authentication, and dynamic content rendering with EJS templates. This project merged my passion for music with programming and challenged me to create a community-driven platform with a focus on user experience and real-world value.\nRead more about it on my LinkedIn or GitHub!",
  },
  {
    title: "Life's a Pitch",
    description: "View campsites",
    thumbnail: lapthumb,
    video: lapgif,
    timescale: "Pair - 7 days",
    gitHubLink: "https://github.com/joemarney/unit-3-project-lifesapitch-frontend",
    deployedLink: "https://lifesapitch.netlify.app/",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: NodejsOriginal, label: "Node.js" },
      { Icon: MongodbOriginal, label: "MongoDB" },
      { Icon: ReactOriginal, label: "React.js" },
      { Icon: SassOriginal, label: "SASS" },
      { Icon: NetlifyOriginal, label: "Netlify" },
    ],
    inDepthDescription: "Life's a Pitch is a full MERN stack (MongoDB, Express, React, Node.js) web application connecting campers with potential campsites. Campsite owners can manage listings, while users can browse detailed information and view locations on an interactive MapBox map. This project honed my skills in pair programming, version control with GitHub, and API integration, while reflecting my passion for outdoor adventures.\nRead more about it on my LinkedIn or GitHub!",
  },
  {
    title: "Repotted",
    description: "Track plant growth",
    thumbnail: repottedthumb,
    video: repottedgif,
    timescale: "Solo - 10 days",
    gitHubLink: "https://github.com/joemarney/unit-4-project-repotted-frontend",
    deployedLink: "https://repotted.netlify.app/",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: PythonOriginal, label: "Python" },
      { Icon: DjangoPlain, label: "Django" },
      { Icon: PostgresqlOriginal, label: "PostgreSQL" },
      { Icon: SassOriginal, label: "SASS" },
      { Icon: HerokuOriginal, label: "Heroku" },
      { Icon: NetlifyOriginal, label: "Netlify" },
    ],
    inDepthDescription: "Repotted is a full-stack Python, Django, and React application designed to help plant owners manage their greenery with confidence. Users can create virtual rooms, explore and filter plants by care requirements, and assign plants to rooms or wishlists for easy organization. Featuring complete CRUD functionality, Repotted combines my love for plants and technology while deepening my expertise in Django and React.\nRead more about it on my LinkedIn or GitHub!",
  },
];
