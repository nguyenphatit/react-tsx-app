import useAuthentication from "hooks/useAuthentication";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext<{auth: boolean, login: Function, logout: Function}>({ auth: false, login: (email: string, password: string) => null, logout: () => null});

export const AuthProvider: React.FC = ({ children }) => {
    const { auth, login, logout} = useAuthentication();

    return (
        <AuthContext.Provider value={{ auth, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}
