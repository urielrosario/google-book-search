import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar justify-content-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Google Books
          </a>
        </div>
        <div>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">
                Saved
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
