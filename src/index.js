import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  { FavouriteContextProvider } from "./store/Favourite-contex";

ReactDOM.render(
    <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FavouriteContextProvider>,
  document.getElementById("root")
);
