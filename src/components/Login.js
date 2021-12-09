import React, {useState, useContext, createContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";
import NavbarLogin from "./NavbarLogin";
import AlertForLogin from "./AlertForLogin";

export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState(false);
    const navigate = useNavigate();

    async function sendLogin(event) {
        event.preventDefault();

        var response = null;

        try {
        response = await axios.post(
            "https://roadrunner-api.herokuapp.com/login",
            {
                "username": username,
                "password": password
            }
        )

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.user.username);

        if (response.data.error) {
            setRegisterError(true);
            console.log(response.data.error);
        }
        else {
            setRegisterError(false);
            navigate('/');   
        }

        } catch (error) {
        console.error(error);
        setRegisterError(true);
        }

      }

     

    return (
        <div>
            <NavbarLogin />
            <form onSubmit={ (event) => {
                sendLogin(event);
            } }>
                <AlertForLogin registerError={registerError}/>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                        onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}