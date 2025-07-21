import "../App.css";
import {} from "@heroui/react";
import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm mx-auto max-w-3xl px-8 py-6 bg-[#242424]/75">
        <Navbar />
      </header>
    </>
  );
}

export default Header;
