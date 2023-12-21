import React from "react";
import "./eventcard.css";

export default function Eventcard({ item, index, image }) {
  return (
    <div>
      <div class="flip-card" key={index}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="session1" />
            <div className="card-front">
              <p class="Title">{item.title}</p>
              <p class="Date-Time">{item.date}</p>
              <p class="Date-Time">{item.time}</p>
            </div>
          </div>

          <div className="flip-card-back">
            <p>{item.text.slice(0, 400)}...</p>
            <br />
            <br />
            <a
              style={{
                padding: "10px 20px",
                backgroundColor: "#4285F4",
                color: "white",
                borderRadius: "5px",
              }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
