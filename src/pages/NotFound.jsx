import { useEffect } from "react";
import "../App.css";
import {} from "@heroui/react";
import { NavLink } from "react-router";

function NotFound() {
  useEffect(() => {
    document.title = "Mattsmatt | 404 Not Found";
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-6">
        <h1>404 | Not Found</h1>
        <div>
          <NavLink to="/">Click here to return to the homepage</NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFound;
