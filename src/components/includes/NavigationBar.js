import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailIcon from "@material-ui/icons/Mail";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import logo from  '../assets/images/logo.jpg'
import Button from "@material-ui/core/Button";
import {MDBBtn, MDBIcon} from "mdbreact";
import {login} from "../../actions";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    navigationBackground: {
        backgroundColor: "white",
        color: "black",
        [theme.breakpoints.up("lg")]: {
            paddingLeft: theme.spacing(15),
            paddingRight: theme.spacing(15),
        },
    },
    title: {
        display: "none",
        color: "black",
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

export default function NavigationBar(loginClick) {
    const classes = useStyles();
    const login = loginClick.loginClick;
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
            <MenuItem className={classes.sectionMobileItem}>
                <Typography fontWeigt="fontWeightMedium" noWrap>
                    Apple iPhones
                </Typography>
            </MenuItem>
            <MenuItem className={classes.sectionMobileItem}>
                <Typography fontWeigt="fontWeightMedium" noWrap>
                    Android
                </Typography>
            </MenuItem>
            <MenuItem className={classes.sectionMobileItem}>
                <Typography fontWeigt="fontWeightMedium" noWrap>
                    Customize
                </Typography>
            </MenuItem>
            <MenuItem>
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
                    <Avatar
                        alt="Phone Case Co."
                        src={logo}
                        className={classes.navigationLogo}
                    />
                    <Typography className={classes.title} variant="h6" noWrap>
                        The Case Co.
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.centerMenu}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Typography fontWeigt="fontWeightMedium" noWrap>
                                    Apple iPhones
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeigt="fontWeightMedium" noWrap>
                                    Android
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeigt="fontWeightMedium" noWrap>
                                    Customize
                                </Typography>
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
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <ShoppingCartIcon style={{ color: "black" }} />
                            </Badge>
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
                        <Button color="primary" onClick={login} >
                            Login
                        </Button>
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
}