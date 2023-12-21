import React from "react";
import "./question.css";

const questionList = [
  {
    title: "Does GDSC require one to have coding skills/technical expertise?",
    text: "Not at all! GDSC welcomes students with a myriad of talents. Whether you're a coding wizard, a photography enthusiast, a video editing pro, or just someone with excellent communication skills, GDSC has a place for you. We prioritize enthusiasm over technical expertise.",
  },
  {
    title: "How can GDSC help with internships and placements?",

    text: "GDSC provides a platform for skill development, networking, and real-world project experience. We host industry events, invite guest speakers, and offer career guidance to support your professional journey.",
  },
  {
    title: "I'm in my first year of engineering. Can I still join GDSC?",
    text: " Absolutely! GDSC is open to students from all years of engineering. Whether you're a freshman or a seasoned senior, if you're passionate about technology and innovation, we'd love to have you on board.",
  },
  {
    title:"GDSC is All About Serious Tech Stuff",
    text:" While we're serious about technology, GDSC is also a hub for creativity, fun, and collaboration. It's not all serious tech jargon – expect workshops with a sprinkle of humor and projects that embrace creativity."


  },
  {
    title:"GDSC is All Work, No Play",
    text:"Far from it! While we take our projects seriously, GDSC is also about building friendships, having fun, and creating a positive community. Expect a balance of work and play in the GDSC experience.",
  }
];
const Question = () => {
  return (
    <section className="Questions center-content">
      <h2>Frequently Asked Questions</h2>

      {questionList.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Question;
