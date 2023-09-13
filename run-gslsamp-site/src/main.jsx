import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Events from './pages/events.jsx'
import Faq from './pages/faq.jsx'
import Membership from './pages/membership.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "membership",
    element: <Membership />,
  },
  {
    path: "events-and-opportunities",
    element: <Events />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
