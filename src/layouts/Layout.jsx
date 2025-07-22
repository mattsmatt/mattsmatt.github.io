import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router";
import "../App.css";

function Layout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-8 py-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
