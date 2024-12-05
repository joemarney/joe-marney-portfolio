//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, FigmaOriginal, NetlifyOriginal, HerokuOriginal } from "devicons-react";

export const projects = [
  {
    title: "Mastermind",
    description: "A browser game inspired by the popular board game: Mastermind.",
    image: "src/assets/images/mastermind.png",
    timescale: "Solo - 7 days",
    gitHubLink: "https://github.com/joemarney/unit-1-project-mastermind",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: Html5Original, label: "HTML" },
      { Icon: Css3Original, label: "CSS" },
      { Icon: JavascriptOriginal, label: "JavaScript" },
    ],
    inDepthDescription:
      "During our second week on the course, we were given an exciting yet challenging task: to design and develop a browser game in just seven days. I chose to recreate the iconic board game Mastermind, putting a unique spin on this timeless classic. Despite having only one week of programming experience, I was determined to tackle this ambitious project.\nThe game incorporates core features such as win/loss logic, an intuitive user interface, and a well-organized directory structure. To enhance the user experience, I added audio elements, including soundbites from the original 1970 Mastermind advertisement, which lend a nostalgic touch. Additionally, the game is fully deployed online, making it accessible to players around the globe.\nThis project proved to be a significant turning point in my journey. It was one of the most challenging experiences I had encountered up to that point, testing both my technical skills and my perseverance. I remember grappling with complex logic and debugging issues, leading to moments of self-doubt where I questioned whether I was cut out for the course. However, pushing through those difficulties taught me the value of resilience and the importance of embracing challenges. Looking back, I am incredibly proud of what I achieved and grateful I decided to stay the course!",
  },
  {
    title: "Beatsync",
    description: "An application where users can rate music venues.",
    image: "src/assets/images/beatsync.png",
    timescale: "Solo - 7 days",
    gitHubLink: "https://github.com/joemarney/unit-2-project-beatsync",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: Html5Original, label: "HTML" },
      { Icon: Css3Original, label: "CSS" },
      { Icon: JavascriptOriginal, label: "JavaScript" },
      { Icon: NodejsOriginal, label: "Node.js" },
      { Icon: ExpressOriginal, label: "Express" },
      { Icon: MongodbOriginal, label: "MongoDB" },
      { Icon: NetlifyOriginal, label: "Netlify" },
    ],
    inDepthDescription:
      "Music has always been a significant part of my life, with a particular passion for drum and bass events. Over time, I realized that the quality of a music venue can make or break the overall experience. This observation inspired me to create Beatsync — a platform where music lovers can share their experiences and rate venues, empowering others to make informed decisions.\nBeatsync is a full MEN stack application (MongoDB, Express, and Node.js) that demonstrates robust full-stack development skills. It includes full CRUD functionality, enabling users to add, update, and manage reviews seamlessly. The application is built with EJS templates, allowing dynamic content rendering directly within the browser, and features session-based authentication for secure and personalized user experiences.\nIn addition to its functional depth, Beatsync is deployed online, making it accessible to a broader audience. This project not only allowed me to merge my love for music with programming but also reinforced my belief in creating technology that serves a real-world purpose. Building Beatsync was an exciting journey that challenged me to think about user experience, data flow, and the value of community-driven platforms.",
  },
  {
    title: "Life's a Pitch",
    description: "A place to search for campsites around the UK.",
    image: "src/assets/images/lifesapitch.png",
    timescale: "Pair - 7 days",
    gitHubLink: "https://github.com/joemarney/unit-3-project-lifesapitch-frontend",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: NodejsOriginal, label: "Node.js" },
      { Icon: MongodbOriginal, label: "MongoDB" },
      { Icon: ReactOriginal, label: "React.js" },
      { Icon: SassOriginal, label: "SASS" },
      { Icon: NetlifyOriginal, label: "Netlify" },
    ],
    inDepthDescription: "MERN stack application.",
  },
  {
    title: "Repotted",
    description: "Inspired by my love for houseplants. An app for people to track their plant growth.",
    image: "src/assets/images/repotted.png",
    timescale: "Solo - 10 days",
    gitHubLink: "https://github.com/joemarney/unit-4-project-repotted-frontend",
    technologies: [
      { Icon: FigmaOriginal, label: "Figma" },
      { Icon: PythonOriginal, label: "Python" },
      { Icon: DjangoPlain, label: "Django" },
      { Icon: PostgresqlOriginal, label: "PostgreSQL" },
      { Icon: SassOriginal, label: "SASS" },
      { Icon: HerokuOriginal, label: "Heroku" },
      { Icon: NetlifyOriginal, label: "Netlify" },
    ],
    inDepthDescription: "Still need to complete READ me",
  },
];
