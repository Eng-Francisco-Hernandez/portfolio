import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projectItems } from "../../util-constants";
import "./projects.scss";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

interface ProjectsProps {
  id?: string;
}

export default function Projects(props: ProjectsProps) {
  const { id } = props;
  return (
    <Grid id={id} container spacing={2} sx={{ mt: 15, mb: 8 }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          My projects
        </Typography>
      </Grid>
      {projectItems.map((item, i) => {
        return (
          <Grid
            item
            xs={12}
            key={i}
            sx={{ mb: 4, textAlign: i % 2 === 0 ? "left" : "right" }}
          >
            <Card className="project-card">
              <CardHeader
                sx={{ padding: "0" }}
                subheader={
                  <Typography component={"span"} variant="body2">
                    {item.technologies.map((technology, j) => {
                      return (
                        <Chip
                          sx={{ mt: 1, mr: 1, ml: 1, mb: 1 }}
                          label={technology}
                          size="small"
                          key={j}
                        ></Chip>
                      );
                    })}
                  </Typography>
                }
                action={
                  <div className="card-header-actions-container">
                    <IconButton
                      href={item.githubLink}
                      target="_blank"
                      color="primary"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href={item.externalLink}
                      target="_blank"
                      color="primary"
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </div>
                }
              />
              <CardMedia sx={{ height: 250 }} image={item.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
