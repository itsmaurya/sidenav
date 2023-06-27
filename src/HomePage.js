import React from "react";
import "./App.css";
import { Link} from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <div className="sidebar">
        <div className="title">SideBar</div>
        <div className="list-items">
          <Link to="/" className="link-home">
            <ul>Home</ul>
          </Link>
          <Link to="/contactus" className="link-contact">
            <ul>Contact Us</ul>
          </Link>
          <Link to="/aboutus" className="link-about">
            {" "}
            <ul>About Us</ul>
          </Link>
          <Link to="/guide" className="link-guide">
            {" "}
            <ul>Guide</ul>
          </Link>
        </div>
      </div>
    </div>
  );
}
