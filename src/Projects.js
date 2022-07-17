import React from "react";
import Card from "./components/Card";
import Img from "./TranslationApp.jpg"

const projects = [
  {
    title: "World Traveler App",
    description: `This application was created by myself and a team of 3 other developers.
            We created an Application that takes in data from two API calls to allow the user
            to translate words and phrases quickly on the go.`,
    deployedLink: "https://levisgaragegroupinc.github.io/translation_app/",
    id: 1,
    img: {Img},
    github: "https://github.com/levisgaragegroupinc/translation_app",
  },
  {
    title: "Community closet",
    description: `This application was created by myself and a team of other developers.
                We created this application with low income families in mind. This app allows users
                to post used clothes they no long need for free so that others in their community
                can give the clothes new life.`,
    deployedLink: "https://community-closet-206.herokuapp.com/",
    id: 2,
    img: "",
    gihub: "https://github.com/areitan/Community_Closet",
  },
  {
    title: "Code quiz",
    description: `add description!`,
    deployedLink: "https://tiffany7809.github.io/Code_Quiz/",
    id: 3,
    img: "",
    github: "https://github.com/Tiffany7809/Code_Quiz",
  },
  {
    title: "work Day Planner",
    description: `add description!`,
    deployedLink: "https://tiffany7809.github.io/Day_Planner/",
    id: 4,
    img: "",
    github: "https://github.com/Tiffany7809/Code_Quiz",
  },
  {
    title: "Random Password Generator",
    description: `add description!`,
    deployedLink: "https://tiffany7809.github.io/Random_Password_Generator/",
    id: 5,
    img: "",
    github: "https://github.com/Tiffany7809/Random_Password_Generator",
  },
  {
    title: "Tech Blog",
    description: `add description!`,
    deployedLink: "https://techblogtiffany.herokuapp.com/",
    id: 6,
    img: "",
    github: "https://github.com/Tiffany7809/Tech-Blog",
  },
  {
    title: "PWA Text Editor",
    description: `add description!`,
    deployedLink: "https://text-editor-tiffany.herokuapp.com/",
    id: 7,
    img: "",
    github: "https://github.com/Tiffany7809/Text_Editor_App",
  },
];

export default function Project() {
  return (
    <div>
      {projects.map(({ img, title, description, deployedLink, id, github }) => (
        <Card
          img={img}
          title={title}
          key={id}
          deployedLink={deployedLink}
          description={description}
          github={github}
        />
      ))}
    </div>
  );
}
