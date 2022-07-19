import React from "react";
import ContactForm from '../ContactMe.js';

const style = {
 div: {
  height: "400px"
 },
 h1: {
  textAlign: "center",
  fontWeight: "600",
},
 
};

export default function Contact() {
  return (
    <div style = {style.div}>
      <h1 style={style.h1}>Contact Me</h1>
    
      <ContactForm />
    </div>
  );
}
