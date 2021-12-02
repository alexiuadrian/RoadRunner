import React, {useState, useContext} from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {user, setUser} = useContext(UserContext);

    async function sendLogin(event) {
        //no html mumbo jumbo
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
        );

        var token = await response.data.token;

        console.log(token);

        console.log("request sent", response);

        } catch (error) {
        console.error(error);
        }

        setUser(response.data.token);
        console.log(user);

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