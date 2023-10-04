import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Regsiter from "../pages/Register/Regsiter";
import News from "../pages/news/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/news.json")
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Regsiter></Regsiter>
            }
        ]
    }
]);

export default router;

