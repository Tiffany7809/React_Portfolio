import React from "react";
import image from "../../../public/assets/images/"

const style = {
  h1: {
    textAlign: "center",
  },
  p: {
    textAlign: 'Center',
    borderColor: "black",
    borderWidth: "3px",
    borderStyle: "solid",
    padding: "10px",
    lineHeight: 2
  }
};

export default function AboutMe() {
  return (
    <div>
      <h1 style={style.h1}>About Me</h1>
        <div>
            <img className="selfie" src= {'../../../public/assets/images/Selfie.jpg'} 
     alt="Tiffanys Selfie"/>
        </div>

      <p style={style.p}>
            I started coding when I was in highschool, just small things for fun,
        mostly drawing pictures with CSS. After highschool I decided to take on a Computer Science
        major at Western Washington University. I completed my first year at WWU with an offer to join 
        the honor roll for my 3.9 GPA. 
            I am Currently attending th eUW coding Bootcamp to gain more confidence in my code
        and to learn the most current technologies that will make me an asset to any team.
            I am always an over achiver and love to code, I can spend hours on side projects and 
        am looking into learnign Game Development. I love the constant challenge that this field offers 
        me. 
            Making this portfolio os my first step into working with React.js and I love it!

            
        
        </p>
    </div>
  );
}
