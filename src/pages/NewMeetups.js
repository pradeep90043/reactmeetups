import React from "react";
import MeetupForm from "../components/meetups/MeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetups = () => {
  const navigate = useNavigate();
  const onAddMeetup = async (meetupData) => {
    await fetch(
      "https://meetupplaces-default-rtdb.firebaseio.com/meetupPlaces.json",
      {
        method: "POST",
        headders: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(meetupData),
      }
    );
    navigate("/");
  };
  return (
    <div>
      <h1>Add new Meetups</h1>
      <MeetupForm onAddMeetup={onAddMeetup} />
    </div>
  );
};

export default NewMeetups;
