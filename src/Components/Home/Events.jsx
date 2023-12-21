import React from "react";
import "./events.css";
import image1 from "../../Images/events/session1.jpg";
import Eventcard from "../Common/Eventcard";
// eventList can contain max of 3 events
const eventList = [
  {
    img: image1,
    title: "ML Study Jams",
    date: "Apr 24-25 2023",
    time: "4-6pm",
    text: "Intro to Machine Learning Are you looking to finally kickstart your journey in Machine Learning? If yes, then we have the perfect event coming up for y'all!🔥✨ 🤖What is ML Study Jam?🤖 ML Study Jams provides you a roadmap of Machine learning with introducing you into the world of Data science. This gives you an overview of Python, Data visualization, Pandas and many more to help you kickstart your ML learning journey. This will help you gain practical experience to work on real projects and a chance to get certified.💥🔥  ",
    link: "https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-ml-study-jams-campaign/",
  },

  {
    img: image1,
    date: "20 Dec 2023",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  },

  {
    img: image1,
    date: "20 Dec 2023",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  },
  {
    img: image1,
    date: "20 Dec 2023",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  },
];
const Events = () => {
  return (
    <section>
      <div className="Session center-div">
        <h2 className="center-content">Upcoming and Ongoing Events</h2>
        <div className="Session_Cards">
          {eventList.map((item, index) => {
            return <Eventcard item={item} index={index} image={item.img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
