import React from "react";
import Project from "../../Projects";

const style = {
  h1: {
    textAlign: "center",
    color:"black"
  },
};

export default function MyWork() {
  return (
    <div style={style.div}>
      <h1 style={style.h1}>My Work</h1>

      <Project />
    </div>
  );
}
