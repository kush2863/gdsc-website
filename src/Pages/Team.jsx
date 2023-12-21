import React from "react";
import "./team.css";
import LineTitle from "../Components/Common/LineTitle";
import TeamCards from "../Components/Team/TeamCards";
import { Leads, CoreTeamList,Facilitators,TeaMembers } from "../TeamDetails";




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
      <LineTitle title="Leads" />
      <TeamCards teamList={Leads} />
      <LineTitle title="Core Team" />
      <TeamCards teamList={CoreTeamList} />
      <LineTitle title="Facilitators" />
      <TeamCards teamList={Facilitators} />
      <LineTitle title="Team Members" />
      <TeamCards teamList={TeaMembers} />
    </div>
  );
};

export default Team;
