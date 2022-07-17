import React from 'react';
import Card from './Card';

const project = {
    name : '',
    description: '',
    id:'',
}
export default function Project() {
    return (
      <div>
        <Card name={project.name} description={project.description} id={project.id} />
      </div>
    );
  }
  