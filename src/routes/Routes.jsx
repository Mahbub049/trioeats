import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddFoodItem from "../components/AddFoodItem/AddFoodItem";
import PrivateRoute from "./PrivateRoute";
import AddedItems from "../components/AddedItems/AddedItems";
import Update from "../components/AddedItems/Update/Update";
import AllFoods from "../components/AllFoods/AllFoods";
import FoodDetails from "../components/FoodDetails/FoodDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/additems',
          element: <PrivateRoute><AddFoodItem></AddFoodItem></PrivateRoute>
        },
        {
          path: '/itemsadded',
          element: <PrivateRoute><AddedItems></AddedItems></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path: '/allfoods',
          element: <AllFoods></AllFoods>,
          loader: ()=>fetch(`http://localhost:5000/items`)
        },
        {
          path: '/fooddetails/:id',
          element: <FoodDetails></FoodDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/items/${params.id}`)
        }
      ]
    },
  ]);

export default router;