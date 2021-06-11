import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderLogin() {
  const classes = useStyles();
  const [anchorE1, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorE1);

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <HomeIcon />
          <Typography
            component={Link}
            style={{ textDecoration: "none", paddingLeft: "5px" }}
            to="/contact"
            variant="h6"
            color="inherit"
            className={classes.title}
          >
            Virtual Open House
          </Typography>

          <Button component={Link} to="/contact" color="inherit">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
