import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-max">
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/experience"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <Link to="/emily-gerrity-resume-0322.pdf" target="_blank">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <a href="mailto:ergerrity@gmail.com">ergerrity@gmail.com</a> • (440)
          667-9749
        </div>
      </div>
    </footer>
  );
};

export default Footer;
