import React from "react";
import {
  Container,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Background from "../../images/condo2.jpeg";
import Map from "./../Map/Map";
import Header from "./../Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,

    // flexDirection: "column",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(20),
    padding: theme.spacing(2),
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6} xs={3} lg={6}>
            <Card style={{ height: "600px", width: "560px" }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "550px" }}
                  className={classes.media}
                  image={Background}
                  title="Logo"
                  alt="pic"
                />
              </CardActionArea>
              <CardActions>
                <Button style={{ background: "red" }}>Transportation</Button>
                <Button style={{ background: "orange" }}>Schools</Button>
                <Button style={{ background: "green" }}>Super Markets</Button>
                <Button style={{ background: "gray" }}>Night Life</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={6} xs={3} lg={6}>
            <Card style={{ height: "590px", width: "450px" }}>
              <CardActionArea>
                <Map />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
