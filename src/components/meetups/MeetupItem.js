import React, { useContext } from "react";
import FavouriteContext from "../../store/Favourite-contex";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favouriteCtx = useContext(FavouriteContext);
  const itemIsFavuorite = favouriteCtx.itemIsFavuorite(props.id);

  const toggleFavouritesHandler = () => {
    if (itemIsFavuorite) {
      favouriteCtx.removeFavourites(props.id);
    } else {
      favouriteCtx.addFavourites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <div>
      <li>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title} </h3>
          <address>{props.description} </address>
          <p>{props.address} </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritesHandler}>
            {itemIsFavuorite ? "Remove from Favourite" : "To favoirate"}
          </button>
        </div>
      </li>
    </div>
  );
};

export default MeetupItem;
