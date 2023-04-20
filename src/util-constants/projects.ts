import stockMarketToolsImg from "../assets/images/projects/stock-market-tools.png";
import onlineCompilerImg from "../assets/images/projects/online-compiler.png";
import imageSearchEngine from "../assets/images/projects/image-search-engine.png";
import finastraDesignSystemClone from "../assets/images/projects/finastra-design-system-clone.png";
import computerScienceWebPlatform from "../assets/images/projects/computer-science-educative-web-platform.png";
import guatemalanMinistriesWiki from "../assets/images/projects/guatemalan-ministries-wiki.png";
import blog from "../assets/images/projects/blog.png";
import postmanClone from "../assets/images/projects/postman-clone.png";
import triviaQuiz from "../assets/images/projects/trivia-quiz.png";

interface Technology {
  name: string;
  url?: string;
}

interface ProjectItem {
  technologies: Technology[];
  githubLink?: string;
  externalLink: string;
  img: string;
  title: string;
  description: string;
}

export const projectItems: ProjectItem[] = [
  {
    technologies: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "MUI" },
      { name: "Alpaca Markets API", url: "https://alpaca.markets/docs/" },
      { name: "Tiingo API", url: "https://api.tiingo.com/" },
    ],
    githubLink: "https://github.com/Eng-Francisco-Hernandez/stock-market-tools",
    externalLink:
      "https://eng-francisco-hernandez.github.io/stock-market-tools/",
    img: stockMarketToolsImg,
    title: "Stock market tools",
    description: `An application built to show hot to use common features in a
    trading application like getting historical data for symbols,
    displaying graphs and search for stock market latest news. The
    third parties used to implement the trading related features in
    the project were Alpaca and Tiingo`,
  },
  {
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "Semantic UI" },
      { name: "JDoodle API", url: "https://www.jdoodle.com/" },
      { name: "Ace editor", url: "https://ace.c9.io/" },
    ],
    githubLink: "https://github.com/Eng-Francisco-Hernandez/online-compiler",
    externalLink: "https://online-compiler-two.vercel.app/landing",
    img: onlineCompilerImg,
    title: "Online compiler",
    description: `Online compiler that supports several programming languages and 
    has several editor themes. Helpful to quickly run snippets and test code easily 
    while working on the development of bigger projects.`,
  },
  {
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "Ace editor", url: "https://ace.c9.io/" },
    ],
    githubLink: "https://github.com/Eng-Francisco-Hernandez/postman-clone",
    externalLink: "https://postman-clone-eng-francisco-hernandez.vercel.app/",
    img: postmanClone,
    title: "Postman clone",
    description: `Application that allows you to send requests to any API. It counts with 
    GET, POST, PUT and DELETE methods. It also supports headers and parameters sending.
    It is very helpful to test APIs and send requests easily using a web application.`,
  },
  {
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "MongoDB" },
      { name: "MongoDB Atlas" },
      { name: "CKEditor", url: "https://ckeditor.com/" },
    ],
    githubLink: "https://github.com/Eng-Francisco-Hernandez/blog",
    externalLink: "https://blog-eng-francisco-hernandez.vercel.app/landing",
    img: blog,
    title: "Blog",
    description: `This was a personal project built in order to have a blog using several modern web development 
    technologies. It works with CKEditor to add the content of the articles and it sanitizes the HTML to make
    the storing of HTML into the database safe.`,
  },
  {
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "Material UI" },
    ],
    githubLink:
      "https://github.com/Eng-Francisco-Hernandez/trivia-quiz",
    externalLink: "https://trivia-quiz-iota.vercel.app/",
    img: triviaQuiz,
    title: "Trivia quiz",
    description: `Application that allows you to complete a trivia quiz about some subject in particular. 
    You can select the amount of questions, the difficulty and the category of the quiz.`,
  },
  {
    technologies: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "Unsplash API", url: "https://unsplash.com/" },
    ],
    githubLink:
      "https://github.com/Eng-Francisco-Hernandez/image-search-engine",
    externalLink:
      "https://eng-francisco-hernandez.github.io/image-search-engine",
    img: imageSearchEngine,
    title: "Image search engine",
    description: `An application built to work as an image search engine to look up for
    pictures of some topic in particular using the Unsplash API as main source of data.
    Helpful to search public images quickly whenever it is needed.`,
  },
  {
    technologies: [
      { name: "Node.js" },
      { name: "JavaScript" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "EJS" },
      { name: "jQuery" },
      { name: "AJAX" },
      { name: "Bootstrap" },
      { name: "CSS" },
    ],
    externalLink:
      "https://computer-science-educative-web-platform.onrender.com",
    img: computerScienceWebPlatform,
    title: "Computer Science Educative Web Platform",
    description: `College level web system which is and has been used in
    several Computer Science courses at Galileo University to manage different assignments,
    announcements and to provide interactive material for learning programming languages to 6 different
    classrooms with over 25 students each.`,
  },
  {
    technologies: [
      { name: "Mendix" },
      { name: "CSS" },
      { name: "Sass" },
      {
        name: "Finastra Design System",
        url: "https://design.fusionfabric.cloud/foundations",
      },
      {
        name: "JSONPlaceholder API",
        url: "https://jsonplaceholder.typicode.com/guide/",
      },
    ],
    githubLink:
      "https://github.com/Eng-Francisco-Hernandez/finastra-design-system-clone",
    externalLink:
      "https://designsystembuild-sandbox.mxapps.io/index.html?profile=Responsive",
    img: finastraDesignSystemClone,
    title: "Finastra Design System Clone",
    description: `An application built to replicate a real design web system from scratch (Finastra).
    To build the user interface every .scss file was created from zero following Sass best practices 
    and following an atomic design.`,
  },
  {
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Sass" },
      { name: "React" },
      { name: "Material UI" },
      { name: "MongoDB" },
      { name: "MongoDB Atlas" },
      { name: "Puppeteer", url: "https://www.npmjs.com/package/puppeteer" },
    ],
    githubLink:
      "https://github.com/Eng-Francisco-Hernandez/guatemalan-ministries-wiki",
    externalLink: "https://guatemalan-ministries-wiki.vercel.app/home",
    img: guatemalanMinistriesWiki,
    title: "Guatemalan ministries wiki",
    description: `Wiki that works as a centralized place to get public information about several Guatemalan 
    ministries like the Ministry of Economy and the Ministry of Public Finances. It uses Puppeteer to perform
    a web scrapping from the public websites of these ministries.`,
  },
];
