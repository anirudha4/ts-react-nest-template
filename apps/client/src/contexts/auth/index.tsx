import Splash from "@components/common/Splash";
import { PATHS } from "@config/constants/paths";
import { getUser, login, signup } from "@lib/auth";
import { ContextType } from "@lib/types/contexts";
import { isAxiosError } from "axios";
import { ReactNode, createContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export type UserType = {
    name: string,
    email: string
} | null;

type Props = {
    children: ReactNode
}


export const AuthContext = createContext<ContextType | null>(null);

const AuthProvider = ({ children }: Props) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserType>(null);
    const [error, setError] = useState<string | null>(null);

    const { data, isLoading } = useQuery('auth/me', getUser, {
        onSettled(response) {
            if (response?.data) {
                setUser(response?.data)
            }
        },
        retry: false
    });


    const { mutate: signupMutation, isLoading: isSigningUp } = useMutation('signup', signup, {
        onSettled(response) {
            const data = response?.data.user;
            if (data) {
                navigate(PATHS.AUTH + '?type=login')
            }
        },
        onError(error) {
            if (isAxiosError(error)) {
                setError(error.response?.data?.message)
                return error.response?.data?.message
            }
            setError('Something went wrong!');
        }
    });
    const { mutate: loginMutation, isLoading: isLoggingIn } = useMutation('login', login, {
        onSettled(response) {
            const data = response?.data?.user
            console.log(data);

            if (data) {
                setUser(data);
                setError(null);
                navigate(PATHS.DASHBOARD);
            }
        },
        onError(error) {
            if (isAxiosError(error)) {
                setError(error.response?.data?.message)
                return error.response?.data?.message
            }
            setError('Something went wrong!');
        },
    });

    const loginWithEmailAndPassword = async (credentials: Omit<UserType, "name">) => {
        return await loginMutation(credentials);
    }

    const signupWithEmailAndPassword = async (credentials: UserType) => {
        return await signupMutation(credentials);
    }
    // prepare values
    const values = {
        loginWithEmailAndPassword,
        signupWithEmailAndPassword,
        error,
        user,
        isLoggingIn,
        isSigningUp
    }
    if(isLoading) {
        return <Splash />
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider