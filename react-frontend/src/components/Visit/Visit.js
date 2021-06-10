import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import condo1 from "../../images/condo1.jpeg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Visit() {
  const classes = useStyles();
  const condo1image = condo1;

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />
      <main>
        {/* Hero unit */}
        {/* <div className={classes.heroContent}> */}

        {/* </div> */}

        {/* <div className={classes.paper} style={{}}>
          <Paper width="50%">ABC</Paper>
        </div> */}

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography
            style={{
              paddingLeft: "50px",
              paddingBottom: "20px",
              fontWeight: 600,
              fontSize: 25,
            }}
          >
            205 RICHDALE AVENUE, UNIT A-20 CAMBRIDGE, MA 02140
          </Typography>
          <Typography
            style={{
              paddingLeft: "350px",
              paddingBottom: "20px",
              fontWeight: 600,
              fontSize: 25,
            }}
          >
            PRICE: $699,000
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={condo1image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Photo Album
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to="/photos"
                    size="small"
                    color="primary"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={condo1image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5">Join our video tour!</Typography>
                  <Typography gutterBottom component="h2">
                    Tour starts at June 14th 3 pm EST. Please use the code
                    "Demo" for joining the video tour.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://video-app-0766-8151-dev.twil.io?passcode=60057107668151"
                    size="small"
                    color="primary"
                  >
                    JOIN
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={condo1image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Condo Details
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to="/details"
                    size="small"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
      <Container>
        <Typography
          //   component="h1"
          variant="h6"
          //   align="center"
          color="textPrimary"
          //   gutterBottom
        >
          This bright sun-filled south facing top floor 2 Bedrooms 1.5 Baths
          condo features oversized windows with well proportioned living room
          plus plenty of space for formal dining area. Unit has hardwood floor
          throughout and a private deck overlooking the trees lines and nearby
          park. Recently renovated kitchen boasts upgraded cabinets, quartz
          countertops, stainless steel appliances. Two good sized bedrooms and
          recently updated full bath. The unit come with in unit-laundry,
          central air conditioning, private storage space and a garage parking.
          All in a professionally managed building located walking distance to
          Red line T, Porter Sq, restaurants, shops, school, and many
          recreational areas. Pet friendly building. High owner occupancy rate.
          Perfect to call home or as an investment.
        </Typography>
      </Container>
    </React.Fragment>
  );
}
