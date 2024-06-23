import React from "react";
import "../index.css";
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header style={{ marginBottom: "12px" }} className="p-5 px-4 bg-black">
        <nav className="navbar flex flex-row justify-between items-center">
          <div className="nav-left">
            <NavLink to="/">
              <h1 className="px-10">Quiz App</h1>
            </NavLink>
          </div>
          <div className="nav-right flex flex-row justify-evenly items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-cyan-300" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-cyan-300" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  isActive ? "text-cyan-300" : ""
                }
              >
                Quiz
              </NavLink>
            </li>
            <Link to='/signin'>
                <button>
                  Signin
                </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
