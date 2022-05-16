import React, { useState } from "react";
import { useAuth } from "../../../negocio/context/AuthContext";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div
      className="d-flex flex-row justify-content-between"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container" style={{ flexDirection: "row", marginBottom: '5px'  }}>
          <button
            className="navbar-toggler text-primary border-0"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
            aria-expanded="false"
          >
            <span>
              <i
                className="bi bi-list"
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                }}
              ></i>
            </span>
          </button>
          <div className="navbar-brand d-flex align-items-center justify-content-center" style={{letterSpacing:'0.1em', fontSize:'28px'}}>
            Cobijado
          </div>
          <div id="navcol-1" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto" style={{ gap: "25px", margin: '8px' }}>
              <li className="nav-item" style={{fontSize: '1.2rem'}}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize: '1.2rem'}}>
              <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  to="/products"
                >
                  Tienda
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize: '1.2rem'}}>
              <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  to="/contacto"
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize: '1.2rem'}}>
              <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  to="/acerca"
                >
                  Acerca de
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        style={{ padding: "10px", position: "absolute", right: "10px", top: '18px' }}
      >
        <i
          className="bi bi-cart2"
          style={{
            fontSize: "1.5rem",
            width: "auto",
            height: "auto",
            marginRight: "10px",
            marginLeft: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        ></i>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            type="button"
            style={{
              color: "rgb(0,0,0)",
              background: "rgba(255,255,255,0)",
              borderWidth: "0px",
              width: "auto",
              padding: "7px",
            }}
          >
            <i
              className="bi bi-person"
              style={{
                fontSize: "1.5rem",
                color: "black",
              }}
            ></i>
          </button>
          <div className="dropdown-menu" style={{
                margin: '5px'
              }}>
            <a className="dropdown-item" href="#">
              First Item
            </a>
            <a className="dropdown-item" href="#">
              Second Item
            </a>
            <a className="dropdown-item" href="#">
              Third Item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
