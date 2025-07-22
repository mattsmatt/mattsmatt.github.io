import "../App.css";
import {} from "@heroui/react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#006fee" : "rgba(255, 255, 255, 0.87)",
                fontWeight: isActive ? "700" : "",
              })}
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "#006fee" : "rgba(255, 255, 255, 0.87)",
                fontWeight: isActive ? "700" : "",
              })}
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#006fee" : "rgba(255, 255, 255, 0.87)",
                fontWeight: isActive ? "700" : "",
              })}
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
