import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <nav className="navigation head-nav">
      <Link to="/">
        <h2 className="nav-logo">Pomodorate</h2>
      </Link>
      <div className="nav-submenu">
        <ul className="nav-flex-row">
          <li className="nav-submenu-sub">
              <Link to="/Login" className="bold button button-primary p2">
                LogIn
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
