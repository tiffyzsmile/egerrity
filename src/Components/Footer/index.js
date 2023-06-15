import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-max">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/emily-gerrity-resume-0322.pdf" target="_blank">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <div className="contact">ergerrity@gmail.com • (440) 667-9749</div>
      </div>
    </footer>
  );
};

export default Footer;
