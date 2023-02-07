import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import "./contact.scss";

interface ContactProps {
  id?: string;
}

export default function Contact(props: ContactProps) {
  const { id } = props;

  const [personalEmail] = useState("fjch87@gmail.com");

  return (
    <Grid
      id={id}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 20, mb: 8 }}
    >
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
        <Grid item xs={12}>
          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() =>
              ((window.location as any) = `mailto:${personalEmail}`)
            }
          >
            Send an email
            <EmailIcon color="disabled" sx={{ ml: 2 }} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
