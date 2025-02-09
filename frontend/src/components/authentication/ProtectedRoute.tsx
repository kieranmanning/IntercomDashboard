import { Navigate } from "react-router";
import { ReactNode } from "react";

type ChildrenProps = {
  children?: ReactNode;
}

export default async function ProtectedRoute({children}: ChildrenProps) {
    const response = await window.fetch('http://localhost:8080/api/session')
    
	const { data, errors } = await response.json()
    if(response.ok) {
        if(data.json()["authenticated"]){
            return children;   
        } else {
            return <Navigate to="/" />
        }
    } else {
        console.log(errors);
    }
}