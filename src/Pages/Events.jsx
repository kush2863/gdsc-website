import React from 'react'
import image1 from "../Images/events/session1.jpg"
import "./events.css"
const eventList = [{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},
{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},
{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},
{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},
{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},
{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},
{
  img:image1,
  date : "20 Dec 2023",
  text :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis",
  link :"/"
},


]
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
                  <p class="Date-Time">{item.date}</p>
                  <p class="Card-text">
                    {item.text}
                  </p>
                  <button class="btn-1 Session_btn">Register Now</button>
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
