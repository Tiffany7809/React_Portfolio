import React from 'react';

const style = {
    h1: {
        textAlign: 'center',
    }
};

export default function Home() {
  return (
    <div>
      <h1 style={style.h1}>Tiffany Dempsey</h1>
      <p>
        Hello! Welcome to my React Porfolio.
        My Name is Tiffany, Welcome to my Portfolio!
        I am a UW Coding Boot Camp student, working to expand my skill set in
        the tech field.
      
        I hope to be a front end web developer, and someday work my way to game
        develpment as well.
        On this site, you can check out some of the work I have done!
      </p>
    </div>
  );
}
