import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddFoodItem from "../components/AddFoodItem/AddFoodItem";
import PrivateRoute from "./PrivateRoute";

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
        }
      ]
    },
  ]);

export default router;