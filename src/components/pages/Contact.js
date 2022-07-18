import React from "react";
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

const contactInfo = {
  email: "tiffany.dempsey2000@gmail.com",
  phone: "206-280-9723",
  linkedin: "Tiffany Dempsey",
  github: "Tiffany7809",
};

export default function Contact() {
  return (
    <div>
      <h1 style={style.h1}>Contact Me</h1>
      <div style={style.div}>
        <p style={style.p}>
          <ul style={style.ul}>
            <li idName="email" style={style.li}>
              E-mail:
              <a style={style.a} href="mailto:tiffany.dempsey2000@gmail.com">
                {contactInfo.email}
              </a>
            </li>
            <li idName="phone" style={style.li}>
              Phone: {contactInfo.phone}
            </li>
            <li idName="linkedin" style={style.li}>
              LinkedIn:
              <a
                style={style.a}
                href="https://www.linkedin.com/in/tiffany-d-00a37777/"
                target="none"
              >
                {contactInfo.linkedin}
              </a>
            </li>
            <li idName="github" style={style.li}>
              GitHub:
              <a
                style={style.a}
                href="https://github.com/Tiffany7809"
                target="none"
              >
                {contactInfo.github}
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
