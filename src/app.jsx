import Landing from "./pages/Landing.jsx";
import Progetti from "./pages/Progetti.jsx";
import Contatti from "./pages/Contatti.jsx";
import WIP from "./pages/WIP.jsx";


import { useEffect, useErrorBoundary } from "preact/hooks";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Landing/>,
  },
  {
    path:"/progetti",
    element: <Progetti />,
  },
  {
    path:"/contatti",
    element: <Contatti />,
  }
])

export function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <RouterProvider router={router}/>;
}
