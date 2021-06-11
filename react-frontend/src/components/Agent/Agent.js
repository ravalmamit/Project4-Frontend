import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Typography,
  TextField,
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
import Rating from "./../Rating/Rating";

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
    // padding: theme.spacing(2),
  },
}));

function Agent({ register }) {
  const [userinfo, setUserinfo] = useState([]);
  const [usernotes, setUsernotes] = useState("");
  let history = useHistory();
  //   const [rating, setRating] = useState(0);
  function getDetails() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/users/register`)
      .then((response) => {
        setUserinfo(response.data);
      });
    console.log(userinfo);
  }
  useEffect(() => {
    getDetails();
  }, []);

  /////RATING FUNCTION//////////////
  const [rating, setRating] = useState(0);
  function ratingHandler() {
    setRating(rating);
  }

  //////////////RATING FUNCTION////////

  function agentNotes(id) {
    // event.preventDefault();
    // console.log(event.target.value);

    console.log(usernotes);

    axios({
      method: "PUT",
      data: {
        notes: usernotes,
        rating: rating,
      },
      //   withCredentials: true,
      url: process.env.REACT_APP_BACKEND_URL + `/users/register/update/${id}`,
    })
      .then(() => {
        setUsernotes("");
      })
      .then(() => getDetails());

    // setUsernotes("");
    // if (data) return <Redirect to="./Home.js" />;
  }

  const classes = useStyles();
  return (
    <div>
      <Header />
      {/* {userinfo[0]} */}
      <Container className={classes.root}>
        <Grid container>
          {userinfo.map((user) => (
            <Grid item sm={6} md={3} xs={3} lg={3}>
              <Card style={{ height: "280px", width: "200px" }} key={user.id}>
                <CardActionArea>
                  <CardContent>
                    <Typography style={{ fontSize: 10 }}>
                      Name:{user.lastname} {user.lastname}
                      <br />
                      Email:{user.email}
                      <br />
                      Phone:{user.phone}
                      <br />
                      Address:{user.address}
                      <br />
                      Notes:{user.notes}
                      <br />
                      Rating:{user.rating}
                    </Typography>
                    <Rating
                      id={user._id}
                      action={(newRating) => {
                        setRating(newRating);
                      }}
                    />

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="agent notes"
                      label="agent notes"
                      name="agent notes"
                      autoComplete="agent notes"
                      autoFocus
                      onChange={(e) => setUsernotes(e.target.value)}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={() => {
                        agentNotes(user._id);
                      }}
                    >
                      Add Notes & Ratings
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          {/* <Grid item sm={6} md={3} xs={3} lg={3}>
            <Card style={{ height: "100px", width: "100px" }}>
              <CardActionArea></CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={3} lg={3}>
            <Card style={{ height: "100px", width: "100px" }}>
              <CardActionArea></CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} md={3} xs={3} lg={3}>
            <Card style={{ height: "100px", width: "100px" }}>
              <CardActionArea></CardActionArea>
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default Agent;
