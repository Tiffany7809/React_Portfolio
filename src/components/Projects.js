import React from "react";
import Card from "./Card";
import TAI from "../images/translationapp.jpg";
import CCI from "../images/communityCloset.png";
import TBI from "../images/techBlog.png";
import DPI from "../images/dayPlanner.png";
import RPI from "../images/randomPass.png";
import CQI from "../images/CodeQuiz.png";
import ComingSoon from "../images/image-coming-soon.jpg";
const projects = [
  {
    title: "World Traveler App",
    description: `This application was created by myself and a team of 3 other developers.
            We created an Application that takes in data from two API calls to allow the user
            to translate words and phrases quickly on the go.`,
    deployedLink: "https://levisgaragegroupinc.github.io/translation_app/",
    id: 1,
    img: `${TAI}`,
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
    img: `${CCI}`,
    gihub: "https://github.com/areitan/Community_Closet",
  },
  {
    title: "Code quiz",
    description: `The goal of this project is to create a code quiz that: 1. has a time limit 2. 
            has a high score board that can be cleared by the user 3. 
            cycles through multiple screens when the answers are given 4. 
            subtracts 10 seconds when the wrong answer is given`,
    deployedLink: "https://tiffany7809.github.io/Code_Quiz/",
    id: 3,
    img: `${CQI}`,
    github: "https://github.com/Tiffany7809/Code_Quiz",
  },
  {
    title: "work Day Planner",
    description: `The Goal of This site is to create a day planner, 
            that gives the user options to schedual their daily 
            tasks in the typical work hours of 9 - 5.
            The current date and time will be shown at the top of the page.
            each row will show a different time block in the day that the user can enter text into.
            each row should show if time has passed, is current or is in the future by color coding.
            each time bloack will have its own save button.
            when the user clicks the save button, the users input will be saved to the local storage.`,
    deployedLink: "https://tiffany7809.github.io/Day_Planner/",
    id: 4,
    img: `${DPI}`,
    github: "https://github.com/Tiffany7809/Code_Quiz",
  },
  {
    title: "Random Password Generator",
    description: `The goal of this project, was to use Java Script to create a Random Password Generator. 
            When the generate password button is clicked, it will ask what the length of  
            the password should be, and if the user would like to include, upper case letter, 
            lower case letters, numbers and symbols. Depending on the users choices, the password generator 
            will produce a password meeting those parameters.`,
    deployedLink: "https://tiffany7809.github.io/Random_Password_Generator/",
    id: 5,
    img: `${RPI}`,
    github: "https://github.com/Tiffany7809/Random_Password_Generator",
  },
  {
    title: "Tech Blog",
    description: `This is a full stack application, a blog that users can post and view others posts as well as edit and delete posts. 
            This apploication uses Handlebars,Express,NodeJS,Bootstrap,Sequelize,Password Authenitcation HTML, JS and CSS.`,
    deployedLink: "https://techblogtiffany.herokuapp.com/",
    id: 6,
    img: `${TBI}`,
    github: "https://github.com/Tiffany7809/Tech-Blog",
  },
  {
    title: "PWA Text Editor",
    description: `This application is a text editor that can be downloaded as an app on mulpiple devices.
          Progressive Web Applications allow for users to enjoy the application 
          even while not connected to the internet so long as they have installed the application their device.`,
    deployedLink: "https://text-editor-tiffany.herokuapp.com/",
    id: 7,
    img: `${ComingSoon}`,
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
