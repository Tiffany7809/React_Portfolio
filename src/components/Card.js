import React from "react";

export default function Card(props) {
  const style = {
    width: "90%",
    margin: "auto",

    div: {
      display: "flex",
      textAlign: "center",
      border: "none"
    },
    ul: {
      listStyle: "none",
    },
    img: {
      width: "150px",
      display: "flex",
      margin: "auto",
    },
    
  };

  return (
    <div style={style.div} className="container" key={props.id}>
      <div className="card" style={style.div}>
        <div className="card-body">
          <h5 className="title">{props.title}</h5>
          <div>
            <img
              style={style.img}
              className="img"
              src={props.img}
              alt="appExample"
            />
          </div>
          <ul style={style.ul}>
            <li className="description">{props.description}</li>
            <li className="deployedLink">
              <a href={props.deployedLink} target="none">
                Check Out The App!
              </a>
            </li>
            <li>
              <a href={props.deployedLink} target="none">
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
