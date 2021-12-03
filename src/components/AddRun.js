import React, {useState, useContext, createContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AddRun(props) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [userId, setUserId] = useState(jwt_decode(localStorage.getItem('token')).user_id);
    const [startDate, setStartDate] = useState(new Date());

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
            <form onSubmit={ (event) => {
                addRun(event);
            } }>
                
                <div class="mb-3">
                    <label class="form-label">Date</label>
                    {/* <input type="text" class="form-control" required onChange={(e) => setDate(e.target.value)}/> */}
                    <DatePicker selected={startDate} onChange={(date) => setDate(date)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Distance (km)</label>
                    <input type="text" class="form-control" required onChange={(e) => setDistance(e.target.value)}/>
                </div>

                <div class="col-md-1 m-2">
                        <label class="form-label">Time</label>
                    </div>
                <div class="d-flex flex-row">
                    <div class="col-md-1 m-2">
                        <input type="number" class="form-control col-12" required onChange={(e) => setHours(e.target.value)}/>
                    </div>
                    <div class="col-md-1 m-2">
                        <input type="number" class="form-control col-12" required onChange={(e) => setMinutes(e.target.value)}/>
                    </div>

                </div>

                <div class="col-md-1">
                    <label class="form-label">Time</label>
                    <input type="number" class="form-control col-12" required onChange={(e) => setHours(e.target.value)}/>
                    <input type="number" class="form-control col-12" required onChange={(e) => setMinutes(e.target.value)}/>
                </div>
                <div class="col-md-1">
                    <input type="number" class="form-control col-12" required onChange={(e) => setMinutes(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}