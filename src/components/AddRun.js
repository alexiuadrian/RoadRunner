import React, {useState, useContext, createContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Navbar from "./Navbar";

export default function AddRun(props) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [userId, setUserId] = useState(jwt_decode(localStorage.getItem('token')).user_id);

    async function sendLogin(event) {
        event.preventDefault();

        var response = null;

        try {
        response = await axios.post(
            "http://localhost:3000/api/runs",
            {
                "date": date,
                "distance": parseInt(distance),
                "time": time,
                "user_id": userId
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

      }

    return (
        <div>
            <Navbar/>
            <form onSubmit={ (event) => {
                sendLogin(event);
            } }>
                <div class="mb-3">
                    <label class="form-label">Date</label>
                    <input type="text" class="form-control" required onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Distance</label>
                    <input type="text" class="form-control" required onChange={(e) => setDistance(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Time</label>
                    <input type="text" class="form-control" required onChange={(e) => setTime(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}