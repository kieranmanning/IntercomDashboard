import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router'

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void
}

const initialValue: IAuthContext = {
    authenticated: false,
    setAuthenticated: () => {}
}

const AuthContext = createContext<IAuthContext>(initialValue);

function AuthProvider() {
    const [ authenticated, setAuthenticated ] = useState(initialValue.authenticated);

    // const navigate = useNavigate()

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated}}>
        
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }