import {createContext} from "react";

type ContextProps = {
    authenticated: boolean,
    email: string,
    token: string
}

export const AuthContext = createContext<Partial<ContextProps>>({});
