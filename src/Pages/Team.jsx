import React from "react";
import "./team.css";
import LineTitle from "../Components/Common/LineTitle";
import TeamCards from "../Components/Team/TeamCards";
const CoreTeamList = [
  {
    img: "https://avatars.githubusercontent.com/u/58720128?v=4",
    name: "Shreeram Shanmugasundaram",
    des: "Web Developer",
    linkedin: "/",
    github: "/",
    color: "#ea4335",
  },

  {
    img: "https://avatars.githubusercontent.com/u/58720128?v=4",
    name: "Sneha Pujari",
    des: "Web Developer",
    linkedin: "/",
    github: "/",
    color: "#34A853",
  },
  {
    img: "https://avatars.githubusercontent.com/u/58720128?v=4",
    name: "Sneha Pujari",
    des: "Web Developer",
    linkedin: "/",
    github: "/",
    color: "#F9BC15",
  },
  {
    img: "https://avatars.githubusercontent.com/u/58720128?v=4",
    name: "Sneha Pujari",
    des: "Web Developer",
    linkedin: "/",
    github: "/",
    color: "#4285F4",
  },
];
const Team = () => {
  return (
    <div>
      <header class="center-content center-div Team_Header">
        <h1>Our Team</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
          ipsum autem cum aut, perferendis, eos ratione voluptatibus officiis ut
          consectetu
        </p>
      </header>
      <LineTitle title="Core Team" />
      <TeamCards teamList={CoreTeamList} />
      <LineTitle title="Team Member" />
      <TeamCards teamList={CoreTeamList} />
    </div>
  );
};

export default Team;
