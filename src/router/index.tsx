import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Write from "../pages/Write";
import Read from "../pages/Read";
import Layout from "../components/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/read/:id",
        element: <Read />,
      },
    ],
  },
]);
export default router;
