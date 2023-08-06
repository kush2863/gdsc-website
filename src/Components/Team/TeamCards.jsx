import React from "react";

const TeamCards = ({ teamList }) => {

  return (
    <section className="center-div Team">
      {teamList.map((item, index) => {
        return (
          <div className="Team_Card center-content" key={index}>
            
            <div className="SlideUp_Div" style={{background:item.color}}></div>
            <img
              src={item.img}
              alt={item.name}
              style={{ borderColor: item.color }}
            />
            <div className="Team_Card_Bottom">
              <h3>{item.name}</h3>
              <p>{item.des}</p>
              <div className="Team_Social">
                <a href={item.linkedin}>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={item.github}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>

          </div>
        );
      })}
    </section>
  );
};

export default TeamCards;
