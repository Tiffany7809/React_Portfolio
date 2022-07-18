import React from "react";
import Project from "../../components/Projects";

const style = {
  h1: {
    textAlign: "center",
    fontWeight: "600",
  },
}
export default function MyWork() {
  return (
    <div>
      <h1 style={style.h1}>Project Archive</h1>

      <Project />
    </div>
  );
}
