import React from "react";
import Card from "./components/Card";
import Img from "./TranslationApp.jpg"

const projects = {  

      title: "World Traveler App",
      description: `This application was created by myself and a team of 3 other developers.
            We created an Application that takes in data from two API calls to allow the user
            to translate words and phrases quickly on the go.`,
      deployedLink: "https://levisgaragegroupinc.github.io/translation_app/",
      id: 1,
    // appTwo: {
    //   title: "Community closet",
    //   description: `This application was created by myself and a team of 3 other developers.
    //             We created an Application that takes in data from two API calls to allow the user
    //             to translate words and phrases quickly on the go.`,
    //   deployedLink: "https://levisgaragegroupinc.github.io/translation_app/",
    //   id: 2,
    // },
  
};
export default function Project() {
  return (
    <div>
      <Card img={Img} title={projects.title} key={projects.id} deployedLink = {projects.deployedLink} description = {projects.description} />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
