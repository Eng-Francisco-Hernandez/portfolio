import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactNode } from "react";

interface SocialNetworkItem {
  link: string;
  icon: ReactNode | string;
}

export const socialNetworkItems: SocialNetworkItem[] = [
  {
    link: "https://github.com/Eng-Francisco-Hernandez",
    icon: <GitHubIcon />,
  },
  {
    link: "https://www.linkedin.com/in/francisco-hern%C3%A1ndez-582377230/",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://medium.com/@fjch87",
    icon: "M",
  },
];
