// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
    // const authContext = useContext(AuthContext);

    fetch("http://localhost:8080/api/session")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.authenticated){
                console.log("authenticated for route")
                return (
                    <Outlet />
                )
            } else {
                return (
                    <Navigate to='/' />
                )
            }
    });
}