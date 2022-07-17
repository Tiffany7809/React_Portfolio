import React from 'react';
import Project from './Projects'


export default function Card(props) {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
        <h5 className="title">{props.title}</h5>
          <p className="description">{props.description}</p>
          <p className="deployedLink"><a href={props.deployedLink} target="none">Check Out The App!</a></p>
        </div>
      </div>
    </div>
  );
}
