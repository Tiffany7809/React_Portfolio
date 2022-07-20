import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
const style = {
  div: {
    width: "70%",
    height: "300px",
    border: "solid 2px black",
    paddingLeft:"3%",
    borderRadius: "3%",
    display:"flex",
    // justifyContent: "center",
    alignItems:"center",
  },
  divContainer: {
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    border: "none"
    
  },
  input: {
    backgroundColor: "white",
    // margin: "3px",
    width:"90%"
  },
  label: {
    fontFamily:"'Arima', cursive",
    color: "black",
    fontWeight: "600",
  
  },


}
export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "Ytemplate_xax51bg", form.current, "OZ9n9zpGVLcmPRD7a")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
  <div style ={style.divContainer}>
    <div style = {style.div}>
      <p>Send me an E-mail, I'd love to hear from you!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label style = {style.label}>Name</label>
        <input style = {style.input} type="text" name="user_name" />
        <br></br>
        <label label style = {style.label}>Email</label>
        <input style = {style.input} type="email" name="user_email" />
        <br></br>
        <label label style = {style.label}>Message</label>
        <textarea style = {style.input} name="message" />
        <br></br>
        <input type="submit" value="Send" />
      </form>
    </div>
    </div>
  );
}
