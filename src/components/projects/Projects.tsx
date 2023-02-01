import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import "./projects.scss";
import stockMarketToolsImg from "../../assets/images/projects/stock-market-tools.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Projects() {
  return (
    <Grid container spacing={2} sx={{ mt: 15, mb: 8 }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          My projects
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card className="project-card">
          <CardHeader
            sx={{ padding: "0px" }}
            subheader={
              <Typography
                component={"span"}
                variant="body2"
                className="project-technology-list"
              >
                <ul>
                  <li> TypeScript </li>
                  <li> Sass</li>
                  <li> React</li>
                  <li> MUI</li>
                  <li> Node.js</li>
                </ul>
              </Typography>
            }
            action={
              <>
                <IconButton
                  href="https://github.com/Eng-Francisco-Hernandez/stock-market-tools"
                  target="_blank"
                  color="primary"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://eng-francisco-hernandez.github.io/stock-market-tools/"
                  target="_blank"
                  color="primary"
                >
                  <OpenInNewIcon />
                </IconButton>
              </>
            }
          />
          <CardMedia
            sx={{ height: 250 }}
            image={stockMarketToolsImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Stock market tools
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An application built to show hot to use common features in a
              trading application like getting historical data for symbols,
              displaying graphs and search for stock market latest newx. The
              third parties used to implement the trading related features in
              the project were Alpaca and Tiingo
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
