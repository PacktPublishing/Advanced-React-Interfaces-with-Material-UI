import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Overview from "../pages/Dashboard/overview";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const dashboardConfig = {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
        {
            path: '',
            element: <Overview/>,
            label: 'Home'
        }
    ]
}
const routerConfig = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    dashboardConfig
]

export const router = createBrowserRouter(routerConfig);