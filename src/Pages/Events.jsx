import React from 'react'

import "./events.css"
import eventList from "./eventList"

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
                <div className='front'> 
                <img src={item.img} alt="session1" />
                
                  <p class="Title">{item.title}</p>
                  <p class="Date-Time">{item.date}</p>
                  <p class="Date-Time">{item.time}</p>
                  </div>
                  <div className='back'>
                  <p class="Card-text">
                    {item.text}
                  </p>
                 
                  <button class="btn-1 Session_btn">
  <a href={item.link} target="_blank" rel="noopener noreferrer">
    Register Now
  </a>
</button>

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
