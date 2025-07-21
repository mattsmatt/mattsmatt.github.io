import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import NotFound from "./pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // Index or home page
        index: true,
        element: <Home />,
      },
      {
        // About page
        path: "about",
        element: <About />,
      },
      {
        // Projects page
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  {
    // Catch-all 404 route
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
