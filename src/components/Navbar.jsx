import "../App.css";
import {} from "@heroui/react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
