import React, {useState, useContext, createContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

export default function EditUser(props) {
    const [username, setUsername] = useState(props.data.username);
    const [email, setEmail] = useState(props.data.email);

    async function editUser(event) {
        event.preventDefault();

        var response = null;

        try {
        response = await axios.put(
            "http://localhost:3000/users/" + props.data.id,
            {
                "username": username,
                "email": email,
            },
            {
                headers: {
                    Authorization: `token ${localStorage.getItem('token')}`
                }
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
        <div id="edit">

            <form onSubmit={ (event) => {
                editUser(event);
            } }>
                
                <div class="mb-3 col-md-5">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-control" required placeholder={props.data.username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div class="mb-3 col-md-5">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" required placeholder={props.data.email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    );
}