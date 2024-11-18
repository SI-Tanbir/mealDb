import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RandomMeal from './Random/RandomMeal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {path:"/random",
    element:<RandomMeal></RandomMeal>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
