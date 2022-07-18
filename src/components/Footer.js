import Git from "../images/githubLogo.webp";
import LinkedIn from "../images/linkInLogo.png";
import Email from "../images/emailLogo.png";

const style = {
    img: {
        width:"100px",
        height:"100px",
        margin: "5px",
        
    },
    div: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0%",
        position:"relative",
        border: "none",
    }

}

export default function Footer() {
    return (
      <div style={style.div}>
        <ul className="nav nav-tabs">
            <li>
                <img style={style.img} className="logo" src={Git} alt ="github logo"/>
            </li>
            <li>
                <img style={style.img} className="logo" src={LinkedIn} alt ="LinkedIn Logo"/>
            </li>
            <li>
                <img style={style.img} className="logo" src={Email} alt ="EmailLogo"/>
            </li>
        </ul>
  
      </div>
    );
  }
  