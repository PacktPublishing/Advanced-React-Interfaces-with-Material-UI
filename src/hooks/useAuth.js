import {useEffect, useState} from "react";

const secretToken = "123456"
const useAuth = () => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const authToken = localStorage.getItem("secretToken");

        if (authToken) {
            setToken(authToken);
        }
    }, []);

    const isLogin = token === secretToken

    const login = (password) => {
        if (password === secretToken) {
            localStorage.setItem("secretToken", secretToken);
            setToken(secretToken);
        } else {
            throw new Error("Invalid password");
        }
    };

    const logout = () => {
        localStorage.removeItem("secretToken");
        setToken(null);
    };

    return {token, login, isLogin, logout};
};

export default useAuth;