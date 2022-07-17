import React from 'react';
import Card from './Card';

const projects = {
    title : 'Testing',
    description: '',
    deployedLink: '',
    id:'',
}
export default function Project() {
    return (
      <div>
        <Card 
        title={projects.title} 
        description={projects.description} 
        id={projects.id} 
        href = {projects.deployedLink} 
        />
      </div>
    );
  }
  