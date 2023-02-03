import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import stockMarketToolsImg from "../../assets/images/projects/stock-market-tools.png";
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

interface ProjectItem {
  technologies: string[];
  githubLink: string;
  externalLink: string;
  img: string;
  title: string;
  description: string;
}

const projectItems: ProjectItem[] = [
  {
    technologies: ["TypeScript", "Sass", "React", "MUI", "Node.js"],
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
];

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
          <Grid item xs={12} key={i}>
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
