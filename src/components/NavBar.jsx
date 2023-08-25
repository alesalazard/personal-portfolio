import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/proyectos">
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/curriculo">
              Currículo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Otra page
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
