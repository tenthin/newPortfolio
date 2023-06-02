import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WebIcon from "@mui/icons-material/Web";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

export default function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg flex-column">
        {/* <div className="navbar-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div> */}
        <div className="container-fluid flex-column align-items-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
              <Link to="/aboutme" id="link">
                <li className="nav-item">
                  {/* <a  href="/bio"> */}
                  <div>
                    <PermIdentityIcon className="profile-icon" />
                  </div>
                  About
                  {/* </a> */}
                </li>
              </Link>
              <Link to="/project" id="link">
                <li className="nav-item">
                  <div>
                    <WebIcon className="project-icon" />
                  </div>
                  Projects
                </li>
              </Link>
              <Link to="/resume" id="link">
                <li className="nav-item">
                  <div>
                    <InsertDriveFileIcon className="resume-icon" />
                  </div>
                  Resume
                </li>
              </Link>
              <Link to="/contact" id="link">
                <li className="nav-item">
                  <div>
                    <PermPhoneMsgIcon className="contact-icon" />
                  </div>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
