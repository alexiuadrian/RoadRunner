import React, {useState, useContext, createContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Navbar from "./Navbar";
import SecondNavbar from "./SecondNavbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AddRun(props) {
    const [date, setDate] = useState(new Date());
    const [distance, setDistance] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [userId, setUserId] = useState(jwt_decode(localStorage.getItem('token')).user_id);

    async function addRun(event) {
        event.preventDefault();

        var response = null;

        try {
        response = await axios.post(
            "http://localhost:3000/api/runs",
            {
                "date": date,
                "distance": parseInt(distance),
                "time": (hours + ' ' + minutes),
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
            <SecondNavbar/>
            
            <form onSubmit={ (event) => {
                addRun(event);
            } }>
                
                <div class="mb-3">
                    <label class="form-label">Date</label>
                    <DatePicker dateFormat="yyyy-MM-dd" selected={date} onChange={(date) => setDate(date)} />
                </div>
                <div class="mb-3 col-md-3">
                    <label class="form-label">Distance (km)</label>
                    <input type="text" class="form-control" required onChange={(e) => setDistance(e.target.value)}/>
                </div>

                <div class="col-md-1">
                        <label class="form-label">Time</label>
                    </div>
                <div class="d-flex flex-row gap-5 mb-3">
                    <div class="col-md-2">
                    hour(s)
                        <input type="text" class="form-control col-12" required onChange={(e) => setHours(e.target.value)}/>
                    </div>
                    <div class="col-md-2">
                        minute(s)
                        <input type="text" class="form-control col-12" required onChange={(e) => setMinutes(e.target.value)}/>
                    </div>

                </div>

                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    );
}