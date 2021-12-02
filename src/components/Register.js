import React, {useState} from "react";
import axios from "axios";

export default function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    async function sendRegistration(event) {
        //no html mumbo jumbo
        event.preventDefault();

        try {
        console.log(username, email, password, confirmPassword);
        const response = await axios.post(
            "http://localhost:3000/register",
            {
                "username": username,
                "email": email,
                "password": password,
                "password_confirmation": confirmPassword
            }
        );

        console.log("request sent", response);
        } catch (error) {
        console.error(error);
        }
      }

    return (
        <div>
            <form onSubmit={ (event) => {
                sendRegistration(event);
            } }>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputUsername1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" required
                        onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" required
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}