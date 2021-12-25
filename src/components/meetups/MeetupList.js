import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <div className={classes.list}>
      {props.meetups && props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
            address={meetup.address}
            id={meetup.id}
          />
        );
      })}
    </div>
  );
};

export default MeetupList;
