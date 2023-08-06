import React from 'react'
import "./events.css"
import image1 from "../../Images/events/session1.jpg"

// eventList can contain max of 3 events
const eventList = [{
    img:image1,
    date:"20 Dec 2023",
    text :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis"
},

{
    img:image1,
    date:"20 Dec 2023",
    text :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis"
},

{
    img:image1,
    date:"20 Dec 2023",
    text :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis"
},
{
    img:image1,
    date:"20 Dec 2023",
    text :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis"
},

]
const Events = () => {
  return (
    <section>
    <div className="Session center-div">
      <h2 className="center-content">Upcoming and Ongoing Events</h2>
      <div className="Session_Cards">

        {eventList.map((item,index)=>{
            return(
                <div className="Session_Card" key = {index}>
          <img src={item.img} alt="session1" />
          <div>
            <p className="Date-Time">{item.date}</p>
            <p className="Card-text">
                {item.text}
            </p>
          </div>
        </div>
            )
        })}
      </div>
    </div>
  </section>
  )
}

export default Events
