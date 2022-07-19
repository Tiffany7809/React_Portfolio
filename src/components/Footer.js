import Git from "../images/githubLogoR.png";
import LinkedIn from "../images/linkedinLogo.jpg";
import Email from "../images/emailLogoR.png";

const style = {
    img: {
        width:"100px",
        height:"100px",
        margin: "5px",
        
    }
}

export default function Footer() {
    return (
      <div className = "footer">
        <ul className="nav nav-tabs">
            <li>
                <a href="https://github.com/Tiffany7809" target="none">
                    <img style={style.img} className="logo" src={Git} alt ="github logo"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/tiffany-d-00a37777/" target="none">
                    <img style={style.img} className="logo" src={LinkedIn} alt ="LinkedIn Logo"/>
                </a>
            </li>
            <li>
                <img style={style.img} className="logo" src={Email} alt ="EmailLogo"/>
            </li>
        </ul>
  
      </div>
    );
  }
  