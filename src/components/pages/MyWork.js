import React from "react";
import Project from "../../Projects";

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
};

export default function MyWork() {
  return (
    <div style={style.div}>
      <h1 style={style.h1}>My Work</h1>

      <Project />
    </div>
  );
}
