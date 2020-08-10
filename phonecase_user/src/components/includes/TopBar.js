import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "#EEEEEE",
    color: "black",
    height: "2rem",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
    },
    [theme.breakpoints.only("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(5),
    },
  },
  text_left: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      marginTop: "-30px",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "-20px",
      paddingRight: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  text_right: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "-30px",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "-20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <Typography variant="body2" className={classes.text_left}>
            FREE DELIVERY ISLANDWIDE
          </Typography>
          <Typography variant="body2" className={classes.text_right}>
            FREE 30 DAY RETURNS ON YOUR ORDERS
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
