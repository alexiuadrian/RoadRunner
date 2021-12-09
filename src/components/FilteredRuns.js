import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import Run from './Run';
import Navbar from './Navbar';
import SecondNavbar from "./SecondNavbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function FilteredRuns(props) {
    const [runs, setRuns] = useState(null);
    const [filter, setFilter] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    function handleFiltering() {
        axios
        .get("https://roadrunnerapi.herokuapp.com/api/runs?from_date='" + fromDate +  "'&to_date='" + toDate + "'",
        {
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log(res.data);
            setRuns(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        console.log(fromDate);
    }, [fromDate])

    return (
        <div>
            <Navbar/>
            <SecondNavbar/>
            
            <div class="filter mt-4">
                <div class="mb-3">
                    <label class="form-label">From Date</label>
                    <DatePicker dateFormat="yyyy-MM-dd" selected={fromDate} onChange={(date) => setFromDate(date)} />
                </div>

                <div class="mb-3">
                    <label class="form-label">To Date</label>
                    <DatePicker dateFormat="yyyy-MM-dd" selected={toDate} onChange={(date) => setToDate(date)} />
                </div>

                <button type="button" class="btn btn-outline-primary"
                    onClick={handleFiltering}>
                    Filter
                </button>
            </div>



            {runs &&
              runs.map((run, index) => (
                <div class='mt-3'>
                    <Run data={run}/>
                </div>
              ))}
        </div>
    );
}