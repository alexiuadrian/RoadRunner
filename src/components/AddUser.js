import React, {useState, useContext, createContext, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";

import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

export default function AddUser(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function addUser(event) {
        event.preventDefault();

        var response = null;

        try {
        response = await axios.post(
            "http://localhost:3000/register/",
            {
                "username": username,
                "email": email,
                "password": password,
                "password_confirmation": password
            }
        )

        console.log(response.data);

        } catch (error) {
        console.error(error);
        }

        refreshPage();
      }

      function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div>

            <Navbar/>
            <SecondNavbar/>

            <form onSubmit={ (event) => {
                addUser(event);
            } }>
                
                <div class="mb-3 col-md-5">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-control" required onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div class="mb-3 col-md-5">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" required onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div class="mb-3 col-md-5">
                    <label class="form-label">Password</label>
                    <input type="text" class="form-control" required onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    );
}