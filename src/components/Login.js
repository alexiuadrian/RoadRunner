import React, {useState, useContext, createContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function sendLogin(event) {
        event.preventDefault();

        var response = null;

        try {
        console.log(username, password);
        response = await axios.post(
            "http://localhost:3000/login",
            {
                "username": username,
                "password": password
            }
        )

        localStorage.setItem('token', response.data.token);
        
        var decoded = jwt_decode(response.data.token);

        console.log(decoded);

        } catch (error) {
        console.error(error);
        }

      }

    return (
        <div>
            <form onSubmit={ (event) => {
                sendLogin(event);
            } }>
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