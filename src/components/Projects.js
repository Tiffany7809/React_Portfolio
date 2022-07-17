import React from 'react';
import Card from './Card';

const projects = [{
        appOne: {  
            title : 'World Traveler App',
            description: 
            `This application was created by myself and a team of 3 other developers.
            We created an Application that takes in data from two API calls to allow the user
            to translate words and phrases quickly on the go.`,
            deployedLink: 'https://levisgaragegroupinc.github.io/translation_app/',
            id:1,
            },
            appTwo: {  
                title : 'Community closet',
                description: 
                `This application was created by myself and a team of 3 other developers.
                We created an Application that takes in data from two API calls to allow the user
                to translate words and phrases quickly on the go.`,
                deployedLink: 'https://levisgaragegroupinc.github.io/translation_app/',
                id:2,
            },
}]
export default function Project() {
    return (
      <div>
            {projects.map((project) => (
                <Card 
                title={project.title} 
                description={project.description}   
                deployedLink={project.deployedLink}
                key={project.id}
                /> 
            )
        )}
      </div>
    )
}
  