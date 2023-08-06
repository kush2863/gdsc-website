import React from "react";
import "./question.css";

const questionList = [
  {
    title: "Does GDSC require one to have coding skills/technical expertise?",
    text: "Nah. GDSC is composed of students who are talented in every way,including coding. Think you are good at photography or video editing? Maybe you can speak well? GDSC has a place for you. Rather than your technical skills, we prefer to focus on your enthusiasm for the job!",
  },
  {
    title: "Does GDSC require one to have coding skills/technical expertise?",
    text: "Nah. GDSC is composed of students who are talented in every way,including coding. Think you are good at photography or video editing? Maybe you can speak well? GDSC has a place for you. Rather than your technical skills, we prefer to focus on your enthusiasm for the job!",
  },
  {
    title: "Does GDSC require one to have coding skills/technical expertise?",
    text: "Nah. GDSC is composed of students who are talented in every way,including coding. Think you are good at photography or video editing? Maybe you can speak well? GDSC has a place for you. Rather than your technical skills, we prefer to focus on your enthusiasm for the job!",
  },
];
const Question = () => {
  return (
    <section className="Questions center-content">
      <h2>Frequently Asked Questions</h2>

      {questionList.map((item,index) => {
        return (
            <div  key = {index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            </div>
          
        );
      })}
    </section>
  );
};

export default Question;
