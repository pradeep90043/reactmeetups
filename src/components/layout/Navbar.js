import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/Favourite-contex";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const favouriteCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ReactMeetups</div>
      <nav className={classes.links}>
        <ul>
          <li>
            <Link to="/">AllMeetups</Link>
          </li>
          <li>
            <Link to="/newmeetups">Add NewMeetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
