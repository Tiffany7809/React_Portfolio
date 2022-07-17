import React from 'react';
const style = {
    ul: {
        listStyle: 'none',
    },
    h1: {
        textAlign: 'center',
    }
};
const contactInfo = {
    email: 'tiffany.dempsey2000@gmail.com',
    phone: '206-280-9723',
    linkedin: 'Tiffany Dempsey',
    github: 'Tiffany7809'
}
export default function Contact() {
   
  return (
    <div>
      <h1 style={style.h1}>Contact Me</h1>
      <p>
        <ul style={style.ul}>
        <li idName='email'>E-mail: <a href="mailto:tiffany.dempsey2000@gmail.com">{contactInfo.email}</a> </li>
        <li idName='phone'>Phone: {contactInfo.phone}</li>
        <li idName='linkedin'>LinkedIn: <a href = "https://www.linkedin.com/in/tiffany-d-00a37777/">{contactInfo.linkedin}</a> </li>
        <li idName='github'>GitHub: <a href ="https://github.com/Tiffany7809">{contactInfo.github}</a></li>
        </ul>
    
      </p>
    </div>
  );
}
