import axios from "axios";
import {
  // createContext,
  useContext,
  // useEffect,
  // useMemo,
  // useState,
  ReactNode
} from "react"

type ChildrenProps = {
  children?: ReactNode;
}

// type IAuthContext = {
//   authenticated: boolean;
//   sessionId?: string;
//   setAuthenticated: (newState: boolean) => void
// }

// const initialAuthState = {
//   authenticated: false,
//   setAuthenticated: () => {}
// }

// const AuthContext = createContext<IAuthContext>(initialAuthState);

const SessionAuthProvider = ({ children }: ChildrenProps) => {
    //  const [token, setToken_] = useState();
    
    return(
      {children}
    )
}

export default SessionAuthProvider;