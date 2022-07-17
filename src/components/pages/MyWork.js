import React from 'react';
import Project from '../Projects';

const style = {
    h1: {
        textAlign: 'center',
    }
};

export default function MyWork() {
  return (
    <div>
        <h1 style ={style.h1}>My Work</h1>
         <Project />
    </div>
   
  );
}
