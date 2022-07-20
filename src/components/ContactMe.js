import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
const style = {
  div: {
    width: "60%",
    height: "300px",
    border: "solid 3px black",
    paddingLeft:"3%"
  },
  divContainer: {
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    border: "none",
    marginBottom: "50%",
    
  },
  input: {
    backgroundColor: "white",
    marginTop: "5%",
    marginLeft: "7.5%",
    width: "70%",
  },
  textarea: {
   marginTop: "2%",
    marginLeft: "5%",
    width: "70%",
    height: "40%",
    backgroundColor: "white",
  }

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
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input style = {style.input} type="text" name="user_name" />
        <br></br>
        <label>Email</label>
        <input style = {style.input} type="email" name="user_email" />
        <br></br>
        <label>Message</label>
        <textarea style = {style.textarea} name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
    </div>
  );
}
