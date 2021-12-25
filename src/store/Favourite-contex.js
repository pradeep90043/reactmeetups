import { createContext, useState } from "react";
//////difficult to remeber///////////
const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourites:(favouriteMeetUp)=> {},
    removeFavourites:(meetupId) => {},
    itemIsFavuorite:(meetupId) => {}
})

export const FavouriteContextProvider = (props) =>{
    const [ userFavuorites, setUserFavuorites] = useState([])

    const addFavouriteHandler = (favouriteMeetUp) => {
        setUserFavuorites((preUserFavourites) => {
            return preUserFavourites.concat(favouriteMeetUp)
        })
    }

    const removeFavouriteHandler = (meetupId) => {
        setUserFavuorites((preUserFavourites) => {
            return preUserFavourites.filter((meetup)=> meetup.id !== meetupId)
        })
    }
const  itemIsFavuoriteHandler = (meetupId) => {
  return  userFavuorites.some((meetup) => meetup.id===meetupId)
}

const context = {
    favourites:userFavuorites,
    totalFavourites:userFavuorites.length,
    addFavourites:addFavouriteHandler,
    removeFavourites:removeFavouriteHandler,
    itemIsFavuorite:itemIsFavuoriteHandler
}

return(
    <FavouriteContext.Provider value= {context} >
        {props.children}
    </FavouriteContext.Provider>
)

}

export default FavouriteContext