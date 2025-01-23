import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type authTokenC

const AuthContext = createContext(false);

const AuthProvider = ({child_elements}) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken) => {
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
            {child_elements}
        </AuthContext.Provider>
    )
}


// useAuth hook for interacting with auth in other components
export const useAuth = () => {
    return useContext(AuthContext);
};
  
export default AuthProvider;