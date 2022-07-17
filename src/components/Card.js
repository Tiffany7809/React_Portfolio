import React from 'react';


export default function Card(props) {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text"><a href={props.deployedLink} target="none">Check Out The App!</a></p>
        </div>
      </div>
    </div>
  );
}
