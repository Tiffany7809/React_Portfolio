import React from "react";
import TDresume from "../../assets/TiffanyDempseyResume.pdf";

const resume = `${TDresume}`

const style = {
  h1: {
    fontWeight: "600",
  },
  h2: {
    textAlign: "center",
    fontFamily: "'Arima', cursive",
    fontWeight: "700",
    textDecoration: "underline",
  },
  h3: {
    fontFamily: "'Arima', cursive",
    fontWeight: "700",
    textDecoration: "underline",
  },
  ul: {
    listStyle: "none",
    fontFamily: "'Arima', cursive",
    fontWeight: "600"
  },
};

export default function Resume() {
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Resume</h1>
      <>
        <h2 style={style.h2}>Tiffany Dempsey</h2>
        <p>
          Download my full Resume: <a href={resume} download="TiffanyDempseyResume.pdf">Download</a>
        </p>
        <br></br>
        <h3 style={style.h3}>Front End Proficiencies:</h3>
        <ul style={style.ul}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>Bootstrap</li>
          <li>Foundation</li>
          <li>Figma</li>
        </ul>
        <br></br>
        <h3 style={style.h3}>Back end Proficiencies </h3>
        <ul style={style.ul}>
          <li>APIs </li>
          <li>NodeJS</li>
          <li> OOP</li>
          <li>Express</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>GraphQL</li>
        </ul>
        <h3 style={style.h3}>Education</h3>
        <ul style = {style.ul}>
          <li>UW Coding Bootcamp</li>
          <li>Western Washington University</li>
        </ul>
      </>
    </div>
  );
}
