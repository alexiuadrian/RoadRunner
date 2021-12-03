import React, {useState} from "react";
import axios from "axios";
import NavbarLogin from "./NavbarLogin";
import AlertForRegister from "./AlertForRegister";

export default function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerError, setRegisterError] = useState(false);
    
    async function sendRegistration(event) {
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

        if (response.data.error) {
            setRegisterError(true);
            console.log(response.data.error);
        }
        else {
            setRegisterError(false);
        }

        } catch (error) {
        console.error(error);
        }
      }

    return (
        <div>
            <NavbarLogin />
            <form onSubmit={ (event) => {
                sendRegistration(event);
            } }>
                <AlertForRegister registerError={registerError}/>
                <div class="alert alert-primary d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                        Passwords must be minimum 6 characters long (for better protection, use numbers and symbols)
                    </div>
                </div>
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