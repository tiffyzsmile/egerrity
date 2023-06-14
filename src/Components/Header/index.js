import logo from "./logo.png";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="content-max">
        <nav>
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <input
            type="checkbox"
            aria-controls="menu"
            id="navToggleMain"
            className="toggleInput"
          />
          <label
            htmlFor="navToggleMain"
            className="closedHeader navToggleMain less"
          >
            <i className="fas fa-bars"></i>
          </label>
          <label
            htmlFor="navToggleMain"
            className="openHeader navToggleMain more"
          >
            <i className="fas fa-times"></i>
          </label>

          <div className="top-nav-container">
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
                <a href="/emily-gerrity-resume-0322.pdf">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
