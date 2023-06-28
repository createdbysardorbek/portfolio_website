import "./index.scss";
import {Link, NavLink} from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
    return (
        <div className="nav-bar">
            <Link to={"/"} className="logo">
                <img src={LogoS} alt="logo"/>
                <h1>Sardor</h1>
            </Link>
            <nav>
                <NavLink
                    to={"/"}
                    exact={true}
                    activeclassname={"active"}
                >
                    <FontAwesomeIcon icon={faHome} color={"4d4d4e"}/>
                </NavLink>
                <NavLink
                    to={"/about"}
                    exact={true}
                    className="about-link"
                    activeclassname={"active"}
                >
                    <FontAwesomeIcon icon={faUser} color={"4d4d4e"}/>
                </NavLink>
                <NavLink
                    to={"/contact"}
                    exact={true}
                    className="contact-link"
                    activeclassname={"active"}
                >
                    <FontAwesomeIcon icon={faEnvelope} color={"4d4d4e"}/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/createdbysardorbek"
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/iamsardorbek_official/"
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
