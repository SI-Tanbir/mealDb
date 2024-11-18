import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import RandomMeal from './Random/RandomMeal.jsx';
import MealsDetails from './Random/MealsDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
  },
  { 
    path:"/random",
    loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
    element:<RandomMeal></RandomMeal>,

  },
  {
    path:"/meal/:postId",
    loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params}`),
    element:<MealsDetails></MealsDetails>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
