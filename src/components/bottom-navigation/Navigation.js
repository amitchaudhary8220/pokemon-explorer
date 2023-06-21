import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log("navigation value ", event, newValue);
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        background: "#E3F4F4",
        position: "fixed",
        zIndex: 10000,
        display: "flex",
        justifyContent: "space-between",
        padding: 0.4,
        top: 0,
      }}
      value={value}
      onChange={handleChange}
    >
      <h3
        className="heading"
        onClick={() => {
          setValue("");
          navigate("/");
        }}
      >
        Pokemon Explorer
      </h3>
      <BottomNavigationAction
        label="Home"
        value=""
        icon={<HomeIcon />}
        className="icon-color"
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />

      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
