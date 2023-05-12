import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: "auto",
    backgroundColor: "#8c8c8c",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              My Website
            </Typography>
            <Typography variant="body1" gutterBottom>
              A short description of my website.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/" className={classes.link}>
                Home
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/about" className={classes.link}>
                About
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/contact" className={classes.link}>
                Contact
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright"}
          <a href="/" className={classes.link}>
            My Website
          </a>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
