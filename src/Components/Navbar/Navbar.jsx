import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Link } from "react-router-dom";
import HdIcon from "@mui/icons-material/Hd";
import FeedIcon from "@mui/icons-material/Feed";
import "./Navbar.css";

import Logo from "../Header/Foto/Logo.jpg";

import { useAuth } from "../../Contexts/AuthContextProvider";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { currentUser, logOutUser } = useAuth();

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
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser?.user}</MenuItem>
      )}

      {currentUser?.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          <IconButton>
            <LogoutIcon />
          </IconButton>
          Log out
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <Link to="/login" className="mobile-link">
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
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <HdIcon />
        </IconButton>
        <Link to="/movies" className="mobile-link">
          <p onClick={handleMobileMenuClose}>О нас</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <a href="https://www.shopdisney.com/?cmp=OTL-Dcom_ChromShpIconB_Shop_EFC28055&efc=280559&att=DcomM_HP_Feed_DSIMobileRedirect_t">
          {" "}
          <p onClick={handleMobileMenuClose}>Цены</p>
        </a>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <FeedIcon />
        </IconButton>
        <Link to="/more" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Отделения</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <LocalMallIcon />
        </IconButton>
        <Link to="/cart" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Услуги</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <Link to="/favorite" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Специалисты</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <Link to="/favorite" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Контакты</p>
        </Link>
        {/* <a class="nav-link text-black" href="#about">Контакты</a> */}
      </MenuItem>

      {currentUser?.isAdmin && (
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <AdminPanelSettingsIcon />
          </IconButton>
          <Link to="/admin" className="mobile-link">
            <p onClick={handleMobileMenuClose}>Admin</p>
          </Link>
        </MenuItem>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: "sticky", top: 0, right: 0, left: 0, zIndex: 11 }}>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <Button component={Link} to="/" sx={{ width: "8%" }}>
            <img
              width="100%"
              // height="50px"
              // src="https://pbs.twimg.com/profile_images/887134102641672192/ZVmUUvNz_400x400.jpg"
              // src="https://centrserdce.ru/local/assets/img/favicon/og_image.jpg"
              src={Logo}
              alt=""
            />
          </Button>

          <Box
            sx={{
              flexGrow: 1,
              // display: { xs: "none", md: "flex" },
              // justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{
                  m: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                }}
                component={Link}
                to="/about"
              >
                О нас
              </Button>

              <Button
                sx={{
                  m: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                }}
                component={Link}
                to="/price"
              >
                Цены
              </Button>
              <Button
                sx={{
                  m: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                }}
                component={Link}
                to="/otdelenie"
              >
                Отделения
              </Button>
              <Button
                sx={{
                  m: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                }}
              >
                <a class="nav-link text-black" href="#servic">
                  Услуги
                </a>
              </Button>
              <Button
                sx={{
                  m: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                }}
              >
                <a class="nav-link text-black" href="#specialist">
                  Срециалисты
                </a>
              </Button>
              <Button
                sx={{
                  m: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                }}
              >
                <a class="nav-link text-black" href="#kontact">
                  Контакты
                </a>
              </Button>

              {currentUser?.isAdmin && (
                <Button
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "16px",
                  }}
                  component={Link}
                  to="/admin"
                >
                  Рабочий стол
                </Button>
              )}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                m: 2,
                color: "black",
                display: "block",
                fontSize: "14px",
              }}
              component={Link}
              to="/reseption"
            >
              Записаться на прием
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ color: currentUser?.isLogged ? "green" : "black" }}
            >
              {currentUser?.isAdmin ? (
                <AdminPanelSettingsIcon />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              // color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
