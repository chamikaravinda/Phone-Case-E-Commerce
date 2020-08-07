import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../index";
import { connect } from "react-redux";
import { userLogout } from "../../actions/user.actions";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import logo from "../assets/images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navigationBackground: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    paddingBottom: "10px",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
    },
  },
  title: {
    display: "none",
    color: "black",
    paddingTop: "6px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "75%",
    color: "black",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionMobileItem: {
    padding: theme.spacing(2.5, 0, 2.5, 2),
  },
  navigationLogo: {
    marginRight: theme.spacing(3),
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  centerMenu: {
    flex: 5,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const NavigationBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goToShoopingCart = () => {
    history.push("/shopping-cart");
  };

  const handleLogout = () => {
    props.onLogout();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {props.user.headers ? (
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      ) : (
        <MenuItem>
          <Link style={{ color: "black" }} to="/login">
            Login
          </Link>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </MenuItem>
      <Link style={{ color: "black" }} to="/apple-products">
        {" "}
        <MenuItem className={classes.sectionMobileItem}>
          <Typography noWrap>Apple iPhones</Typography>
        </MenuItem>
      </Link>

      <MenuItem className={classes.sectionMobileItem}>
        <Typography noWrap>Android</Typography>
      </MenuItem>
      <MenuItem className={classes.sectionMobileItem}>
        <Typography noWrap>Customize</Typography>
      </MenuItem>
      {props.user.headers ? (
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      ) : (
        <MenuItem>
          <Link style={{ color: "black" }} to="/login">
            Login
          </Link>
        </MenuItem>
      )}
      <MenuItem onClick={goToShoopingCart}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonOutlineIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navigationBackground}>
        <Toolbar>
          <Link to="/">
            <Grid container justify="center">
              <img alt="Phone Case Co." src={logo} />
              <Typography className={classes.title} variant="h6" noWrap>
                The Case Co.
              </Typography>
            </Grid>
          </Link>
          <div className={classes.grow} />
          <div className={classes.centerMenu}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <a style={{ cursor: "pointer" }}>
                  <Link style={{ color: "black" }} to="/apple-products">
                    {" "}
                    <Typography noWrap>Apple iPhones</Typography>
                  </Link>
                </a>
              </Grid>
              <Grid item>
                <Link style={{ color: "black" }} to="/android-products">
                  <Typography noWrap>Android</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography noWrap>Customize</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionDesktop}>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon style={{ color: "black" }} />
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={goToShoopingCart}
            >
              {props.cart.length > 0 ? (
                <Badge badgeContent={props.cart.length} color="secondary">
                  <ShoppingCartIcon style={{ color: "black" }} />
                </Badge>
              ) : (
                <Badge color="secondary">
                  <ShoppingCartIcon style={{ color: "black" }} />
                </Badge>
              )}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <PersonOutlineIcon style={{ color: "black" }} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userData.user || [],
    cart: state.shoppingCartData.cart || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(userLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
