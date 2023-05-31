export interface KnownTechnologyType {
  category: string;
  items: string[];
}

export const knownTechnologies: KnownTechnologyType[] = [
  {
    category: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "GraphQL",
      "HTML",
      "CSS/Sass",
    ],
  },
  {
    category: "Libraries, Frameworks & Database",
    items: [
      "React.js",
      "Ionic",
      "Storybook",
      "Apollo Client",
      "MUI",
      "Semantic UI",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Next.js",
      "jQuery",
      "Serverless Framework",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "Tools, Platforms & Services",
    items: [
      "Git",
      "Heroku",
      "GitHub actions/pages",
      "Figma",
      "InVision",
      "Docker",
      "AWS S3",
      "AWS CloudFront",
      "AWS Route53",
      "AWS EC2",
      "AWS ECR",
      "AWS ECS",
      "Google Compute Engine",
      "Google Storage",
    ],
  },
];
