import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category";

import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import Login from "../Pages/Home/Account/Login/Login";
import Register from "../Pages/Home/Account/Register/Register";
import PrivateRoute from "../firebase/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-server-mojaer.vercel.app/categories/${params.id}`)
            }
        ],
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [{
            path: ':id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({ params }) => fetch(`https://news-server-mojaer.vercel.app/news/${params.id}`)
        }]
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
]);

export default router;