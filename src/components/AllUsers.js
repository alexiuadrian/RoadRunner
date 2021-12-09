import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import User from './User';
import Navbar from './Navbar';
import SecondNavbar from "./SecondNavbar";

export default function AllUsers(props) {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios
        .get("https://roadrunnerapi.herokuapp.com/users",
        {
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log(res.data);
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <Navbar/>
            <SecondNavbar/>
            {users &&
              users.map((user, index) => (
                <div class='mt-3'>
                    <User data={user} />
                </div>
              ))}
        </div>
    );
}