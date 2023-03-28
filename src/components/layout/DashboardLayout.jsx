import {Outlet} from "react-router-dom"
import Navbar from "./_navbar"
import Sidebar from "./_sidebar"
import {useEffect} from "react";
import useAuth from "../../hooks/useAuth.js";

const DashboardLayout = () => {
    const auth = useAuth()

    useEffect(() => {
        if (!auth.isLogin) {
            console.log(auth.isLogin)
        }
    }, [])

    return (
        <>
            <Navbar/>
            <Sidebar/>
            <div style={{marginTop: "74px"}}/>
            <Outlet/>
        </>
    )
}

export default DashboardLayout