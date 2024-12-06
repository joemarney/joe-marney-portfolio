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
    description: "An application where users can view campsites around the UK.",
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
    inDepthDescription:
      "Both my project partner and I share a love for camping and the great outdoors, so creating Life's a Pitch felt like a natural choice. This web application is designed to connect campers with potential campsites, making planning outdoor adventures easier and more informed.\nLife's a Pitch is a full MERN stack (MongoDB, Express, React, and Node.js) application, showcasing our ability to work collaboratively in a complex development environment. The app allows campsite owners to create, update, and delete listings for their campsites, providing them with control over their content. General users can browse these listings, view detailed information about the campsites, including amenities and photos, and see their exact locations on a map, thanks to the integration of the MapBox API.\nThis project was my first experience working in a pair, which introduced me to the dynamics of team-based development. Utilizing GitHub branches was an invaluable lesson in collaborative coding, allowing us to experiment with features without risking the stability of the main project. Although resolving merge conflicts occasionally posed challenges, we managed to navigate them effectively.\nLife's a Pitch was a fantastic opportunity to improve my skills in pair programming, version control, and API integration, all while creating an application that reflects my personal interests and provides practical utility to others.",
  },
  {
    title: "Repotted",
    description: "An application for houseplant owners to keep track of their plants in virtual rooms.",
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
    inDepthDescription:
      "I have a deep appreciation for houseplants, but like many plant enthusiasts, I've faced challenges in keeping them thriving. Over the years, I've lost a few due to overwatering, underwatering, or failing to meet their specific lighting requirements. Repotted is my solution—a tool to help plant owners manage their greenery with confidence.\nBuilt with Python, Django, and React, Repotted is a full-stack application featuring complete CRUD functionality. Users can create virtual rooms, specifying the direction their windows face to determine how much light their plants receive daily. The app also allows users to explore and filter plants based on factors like their care requirements, such as light needs, or whether the plant is safe for children or pets.\nEach plant has a detailed page with essential information, making it easier for users to select suitable additions to their homes. They can add plants to their wishlist for future purchases or assign them to a room they've already created, fostering an organized and thoughtful approach to plant care.\nRepotted represents the culmination of my love for plants and technology. It was a rewarding project that not only deepened my understanding of backend frameworks like Django but also reinforced my front-end design skills in React. This app is a reflection of my passion for creating practical tools that enhance daily life.",
  },
];
