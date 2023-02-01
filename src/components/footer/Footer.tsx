import { Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid container spacing={2} sx={{ mt: 10, mb: 8 }}>
      <Grid item xs={12}>
        <Typography component={"span"} variant="body1" color="text.secondary">
          Built and designed by Francisco Hernández
          <br />
          GITHUB LINK
        </Typography>
      </Grid>
    </Grid>
  );
}
