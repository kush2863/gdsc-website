
import React from "react";
import image1 from "../Images/events/session1.jpg";
import "./events.css";
import eventList from "./eventList";
import Eventcard from "../Components/Common/Eventcard";
const Events = () => {
  return (
    <section class="Events event-bg">
      <div class="Page-Header center-content">
        <h2>Upcoming and Ongoing Events</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ea accusamus vitae nulla, ex itaque error nobis ut qui velit. Vero
          iusto voluptate quis temporibus quas inventore odit nam enim!
        </p>

      </div>
      <div class="Events_Warpper">
        <div class="center-div">
          <div class="Session_Cards">
            {eventList.map((item, index) => {
              return (
                <Eventcard
                  item={item}
                  index={index}
                  image={image1}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
