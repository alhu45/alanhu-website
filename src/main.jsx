import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About1.jsx'
import Projects from './pages/Projects1.jsx'
import Contact from './pages/Contact.jsx'
import Travel from './pages/Travel.jsx'  
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const home = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  { 
    path: "/travel",  
    element: <Travel /> 
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={home} />
  </React.StrictMode>,
)
