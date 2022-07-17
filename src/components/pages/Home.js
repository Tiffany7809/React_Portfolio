import React from "react";

const style = {
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  h1: {
    textAlign: "center",
  },
  p: {
    textAlign: "Center",
    borderColor: "black",
    borderWidth: "3px",
    borderStyle: "solid",
    padding: "10px",
    lineHeight: 2,
  },
};

export default function Home() {
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Tiffany Dempsey</h1>

      <p style={style.p}>
        Hello! Welcome to my React Porfolio. My Name is Tiffany, Welcome to my
        Portfolio! I am a UW Coding Boot Camp student, working to expand my
        skill set in the tech field. I hope to be a front end web developer, and
        someday work my way to game develpment as well. On this site, you can
        check out some of the work I have done!
      </p>
    </div>
  );
}
