import React, {  useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouriteContext from "../store/Favourite-contex";

const Favourites = () => {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>you got no favourite meetups, want add some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>favourites </h1>
      {content}
    </section>
  );
};

export default Favourites;
