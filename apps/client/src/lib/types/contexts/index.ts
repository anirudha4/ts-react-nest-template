import { UserType } from "@contexts/auth";

export type ContextType = {
    user: UserType | null,
    error?: string | null,
    isLoggingIn: boolean,
    isSigningUp: boolean,
    loginWithEmailAndPassword: (user: Omit<UserType, 'name'>) => Promise<void>,
    signupWithEmailAndPassword: (user: UserType) => Promise<void>,
    logoutMutation: () => void
}