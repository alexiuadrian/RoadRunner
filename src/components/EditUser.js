import React, {useState, useContext, createContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

export default function EditUser(props) {
    const [username, setUsername] = useState(props.data.username);
    const [email, setEmail] = useState(props.data.email);
    const [isUserManager, setIsUserManager] = useState(props.isUserManager);
    const [isUser, setIsUser] = useState(props.isUser);
    const [isAdmin, setIsAdmin] = useState(props.isAdmin);

    async function editUser(event) {
        event.preventDefault();

        var response = null;
        var response1 = null;

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


        try {
            response1 = await axios.post(
                "http://localhost:3000/user_roles/" + props.data.id,
                {
                    "is_admin": isAdmin,
                    "is_user_manager": isUserManager,
                    "is_user": isUser
                },
                {
                    headers: {
                        Authorization: `token ${localStorage.getItem('token')}`
                    }
                }
            )
            console.log(response1.data);

        } catch (error) {
            console.error(error);
        }

        refreshPage();
      }

      function refreshPage() {
        window.location.reload(false);
      }

    const renderUserCheckbox = () => {
        if(isUser) {
            return <input class="form-check-input" type="checkbox" onChange={(e) => setIsUser(e.target.checked)} checked/>
        }
        else {
            return <input class="form-check-input" type="checkbox" onChange={(e) => setIsUser(e.target.checked)}/>
        }
    }

    const renderUserManagerCheckbox = () => {
        if(isUserManager) {
            return <input class="form-check-input" type="checkbox" checked onChange={(e) => setIsUserManager(e.target.checked)}/>
        }
        else {
            return <input class="form-check-input" type="checkbox" onChange={(e) => setIsUserManager(e.target.checked)}/>
        }
    }

    const renderAdminCheckbox = () => {
        if(isAdmin) {
            return <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked onChange={(e) => setIsAdmin(e.target.checked)}/>
        }
        else {
            return <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={(e) => setIsAdmin(e.target.checked)}/>
        }
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

                <div class="form-check">
                    {renderUserCheckbox()}
                    <label class="form-check-label" for="flexCheckChecked">
                        User
                    </label>
                </div>

                <div class="form-check">
                    {renderUserManagerCheckbox()}
                    <label class="form-check-label" for="flexCheckChecked">
                        User Manager
                    </label>
                </div>

                <div class="form-check">
                    {renderAdminCheckbox()}
                    <label class="form-check-label" for="flexCheckChecked">
                        Admin
                    </label>
                </div>

                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    );
}