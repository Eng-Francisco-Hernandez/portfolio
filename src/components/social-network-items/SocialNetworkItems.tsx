import { Fab } from "@mui/material";
import { socialNetworkItems } from "../../util-constants";
import "./social-network-items.scss";

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
