import React from 'react'
import image1 from "../Images/events/session1.jpg"
import "./events.css"
import eventList from './eventList'
const Events = () => {
  return (
    <section class="Events event-bg">
    <div class="Page-Header center-content">
      <h2>Upcoming and Ongoing Events</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea accusamus vitae nulla, ex itaque error nobis ut qui velit. Vero iusto voluptate quis temporibus quas inventore odit nam enim!</p>
    </div>
    <div class="Events_Warpper">

      <div class="center-div">
        <div class="Session_Cards">

          {
            eventList.map((item,index)=>{
              return(
                <div class="Session_Card" key={index}>
                <img src={image1} alt="session1" />
                <div>
                  <p class="Title">{item.title}</p>
                  <p class="Date-Time">{item.date}</p>
                  <p class="Date-Time">{item.time}</p>
                  <p class="Card-text">
                    {item.text}
                  </p>
                  <a href={item.link}><button class="btn-1 Session_btn">Register Now</button></a>
                </div>
              </div> 
              )
            })
          }
               
        </div>
      </div>
      </div>
  </section>
  )
}

export default Events
