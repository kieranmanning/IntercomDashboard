import { Navigate } from "react-router";
import { useAuth } from '../../providers/GitHubAuthProvider';
import { ReactElement } from "react";

export default function ProtectedRoute(children: ReactElement) {
    const { token } = useAuth();

    if(!token){
        return <Navigate to="/login" />
    }

    return children;
}