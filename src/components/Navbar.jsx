import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="nav-pill">

        <h3 className="nav-logo">Kimetsu No Yaiba's Site</h3>

        <div className="nav-menu">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>

          <NavLink to="/team" className="nav-item">
            Team
          </NavLink>

          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;