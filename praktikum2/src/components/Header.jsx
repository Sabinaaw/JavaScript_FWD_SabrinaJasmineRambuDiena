import React from "react";

function Header({ setPage }) {
  return (
    <div className="header">
      <h2>🩵 WEEBOOKSTORE ✨</h2>

      <nav style={{ marginTop: "10px" }}>
        <button className="btn" onClick={() => setPage("home")}>
          Home
        </button>
        <button className="btn" onClick={() => setPage("about")}>
          About
        </button>
        <button className="btn" onClick={() => setPage("contact")}>
          Contact
        </button>
      </nav>
    </div>
  );
}

export default Header;