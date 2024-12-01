import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLayout from "../Components/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffe/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails/CoffeeDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <HomePage></HomePage>,
            loader:()=> fetch("http://localhost:5000/coffees")
        },
        {
            path:'/addCoffee',
            element:<AddCoffee></AddCoffee>
        },
        {
          path:'/updateCoffee/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
        },
        {
          path:'/coffee/:id',
          element:<CoffeeDetails></CoffeeDetails>,
          loader:()=> fetch('http://localhost:5000/coffees')
        },
        {
          path:"*",
          element:<ErrorPage></ErrorPage>
        }

      ]
    },
  ]);
  


export default router;