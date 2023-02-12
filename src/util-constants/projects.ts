import stockMarketToolsImg from "../assets/images/projects/stock-market-tools.png";
import onlineCompilerImg from "../assets/images/projects/online-compiler.png";
import imageSearchEngine from "../assets/images/projects/image-search-engine.png";

interface ProjectItem {
  technologies: string[];
  githubLink: string;
  externalLink: string;
  img: string;
  title: string;
  description: string;
}

export const projectItems: ProjectItem[] = [
  {
    technologies: [
      "Node.js",
      "TypeScript",
      "Sass",
      "React",
      "MUI",
      "Alpaca Markets API",
      "Tiingo API",
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
      "Next.js",
      "TypeScript",
      "Sass",
      "React",
      "Semantic UI",
      "JDoodle API",
      "Ace editor",
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
      "Node.js",
      "TypeScript",
      "Sass",
      "React",
      "Bootstrap",
      "Unsplash API",
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
];
