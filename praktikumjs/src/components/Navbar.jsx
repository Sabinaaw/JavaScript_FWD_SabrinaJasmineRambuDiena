import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="nav-pill">
        <h3 className="nav-logo">Sabrina's Sites</h3>

        <div className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/team" className="nav-item">Member</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
