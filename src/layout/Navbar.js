import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
      marginLeft: theme.drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  desktopMenu: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.label} onClick={handleMenuClose}>
          {menuItem.label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={handleMenuOpen}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My Website
        </Typography>
        <div className={classes.desktopMenu}>
          {menuItems.map((menuItem) => (
            <Button key={menuItem.label} color="inherit" href={menuItem.link}>
              {menuItem.label}
            </Button>
          ))}
        </div>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
}

export default Navbar;
