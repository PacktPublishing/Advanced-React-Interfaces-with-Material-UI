import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const Login = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const auth = useAuth()

    useEffect(() => {
        if (auth.isLogin) {
            navigate('/dashboard')
        }
    }, [navigate, auth.isLogin])
    const handleSubmit = (e) => {
        auth.login(password)
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit">
                Login
            </Button>
        </form>
    );
};

export default Login; 