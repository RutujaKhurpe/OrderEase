import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import image from '../assest/tastyfood.jpg';
import './Navbar.css'; // Import the CSS file

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "black",
  },
  appBar: {
    backgroundColor: "#f6f7f9",
  },

  
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={image} alt="food Logo" className="logo"/> {/* Apply the logo class */}
          <Typography variant="h6" className={classes.title}>
            TASTY FOODS
          </Typography>
          <Link to='/' className="menuButton"> {/* Apply the menuButton class */}
            <Typography variant="body1">
              Home
            </Typography>
          </Link>
          <Link to='/orders' className="menuButton"> {/* Apply the menuButton class */}
            <Typography variant="body1">
              Your Order
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
