import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://meetupplaces-default-rtdb.firebaseio.com/meetupPlaces.json"
    );
    const data = await response.json();
    const meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }
    setIsLoading(false);
    setLoadedMeetups(meetups);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All meetingups</h1>
      <div>
        <ul>
          <MeetupList meetups={loadedMeetups} />
        </ul>
      </div>
    </div>
  );
};

export default AllMeetups;
