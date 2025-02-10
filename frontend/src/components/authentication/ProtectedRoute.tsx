// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
    isAuthenticated: boolean
}

export default function ProtectedRoutes(props: Props) {
    if(props.isAuthenticated){
        console.log("authenticated for route")
        return (
            <Outlet />
        )
    } else {
        return (
            <Navigate to='/' />
        )
    }   
}