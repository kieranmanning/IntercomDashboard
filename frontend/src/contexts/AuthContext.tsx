import { createContext } from 'react';

type AuthProps = {
    isAuthenticated: boolean
}

const initialAuthState: AuthProps = {
    isAuthenticated: false
}

export const AuthContext = createContext(initialAuthState);