import { useState } from "react"

export const useOnLoad = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    return {
        loggedIn,
        loading
    }
}