import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const home = createBrowserRouter([
  {
    path: "/alanhu-website/",
    element: <App />,
  },
  {
    path: "/alanhu-website/about",
    element: <About />,
  },
  {
    path: "/alanhu-website/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={home} />
  </React.StrictMode>,
)
