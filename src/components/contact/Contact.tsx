import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import "./contact.scss";

export default function Contact() {
  return (
    <Grid container spacing={2} sx={{ mt: 15, mb: 8 }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Contact me
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component={"span"} variant="body1" color="text.secondary">
          My email is always open in case you want to talk or ask about
          something. <br /> Feel free to get in touch!
        </Typography>
        <TextField
          fullWidth
          id="outlined-required"
          label="Your email"
          defaultValue="example@server.com"
          sx={{ mt: 4, mb: 2 }}
        />
        <TextField
          fullWidth
          id="outlined-required"
          label="Subject"
          defaultValue="Subject example"
          sx={{ mb: 2 }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Message example"
          fullWidth
        />
        <Grid item xs={12}>
          <Button fullWidth sx={{ mt: 2 }} variant="contained">
            Send email
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
