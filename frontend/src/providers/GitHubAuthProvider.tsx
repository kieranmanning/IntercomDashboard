import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode
} from "react"

type tokenState = {
  token: string | null,
  setToken: (newToken: string) => void
}

const defaultToken: tokenState = {
  token: null,
  setToken: (newToken: string) => {console.log(newToken)}
};

const AuthContext = createContext(defaultToken);

const GitHubAuthProvider = (children: ReactNode) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken: string) => {
        setToken_(newToken);
      };

    useEffect(() => {
        if(token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token])

    const contextValue = useMemo(
        () => ({
          token,
          setToken,
        }),
        [token]
      );
      
    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}


// useAuth hook for interacting with auth in other components
export const useAuth = () => {
    return useContext(AuthContext);
};
  
export default GitHubAuthProvider;