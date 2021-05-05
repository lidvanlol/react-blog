import React from "react";
import "./style.scss";

function Navbar({ searchInput, searchInputHandler }) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#!">
              My Blog
            </a>
            <form className="navbar-form navbar-right">
              <input
                className="form-control"
                onChange={(e) => searchInputHandler(e.currentTarget.value)}
                value={searchInput}
                type="text"
                placeholder="Search"
              />
            </form>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div
            id="navbar"
            className="navbar-collapse collapse"
            aria-expanded="false"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">My Profile</a>
              </li>
              <li>
                <a href="#!">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
