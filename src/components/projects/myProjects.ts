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
    inDepthDescription: "I have always loved going to music events. Drum and bass in particular. Over my time I worked out that the venue makes or breaks the event. I designed and developed Beatsync to allow users to have a say. I have no clue why other apps do not do this as I think it could be actually useful to lots of people. It is a full MEN stack app with full CRUD functionality. I used EJS templates to render within the browser. It has session based authentication baked in and it is deployed online.",
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
