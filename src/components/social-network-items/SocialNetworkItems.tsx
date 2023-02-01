import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Fab } from '@mui/material';
import { ReactNode } from 'react';
import './social-network-items.scss';


interface SocialNetworkItem {
  link: string;
  icon: ReactNode | string;
}

const socialNetworkItems: SocialNetworkItem[] = [
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

export default function SocialNetworkItems() {
  return (
    <div className="bottom-corner-fixed-container">
      {socialNetworkItems.map((item, i) => {
        return (
          <div className="mb-sm" key={i}>
            <Fab size="small" color="primary" href={item.link} target="_blank">
              {item.icon}
            </Fab>
          </div>
        );
      })}
    </div>
  );
}
