import { AuthContext, ContextType } from "@contexts/auth"
import { useContext } from "react"

const useAuth = () => useContext(AuthContext) as ContextType;
export default useAuth;