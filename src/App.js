import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetups />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/newmeetups" element={<NewMeetups />} />
      </Routes>
      </Layout>
    </div>
  );
};

export default App;
