import React from "react";
import ContactForm from '../ContactMe.js';

const style = {
  ul: {
    listStyle: "none",
    textAlign: "left",
    fontSize: "1.3rem",
    backgroundColor: "gray",
  },
  p: {
    backgroundColor: "gray",
  },
  div: {
    marginTop: "9rem",
    padding: "3rem",
    backgroundColor: "gray",
  },
  li: {
    backgroundColor: "gray",
  },
  a: {
    backgroundColor: "gray",
  },
  h1: {
    textAlign: "center",
    fontWeight: "600",
  },
};

// const contactInfo = {
//   email: "tiffany.dempsey2000@gmail.com",
//   phone: "206-280-9723",
//   linkedin: "Tiffany Dempsey",
//   github: "Tiffany7809",
// };

export default function Contact() {
  return (
    <div>
      <h1 style={style.h1}>Contact Me</h1>
    
      <ContactForm />
    </div>
  );
}
