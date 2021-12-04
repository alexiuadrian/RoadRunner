import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import Run from './Run';
import Navbar from './Navbar';
import SecondNavbar from "./SecondNavbar";

export default function AllRuns(props) {
    const [runs, setRuns] = useState(null);
    const [filter, setFilter] = useState(false);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios
        .get("http://localhost:3000/api/runs",
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
    }, []);

    return (
        <div>
            <Navbar/>
            <SecondNavbar/>
            {runs &&
              runs.map((run, index) => (
                <div class='mt-3'>
                    <Run data={run}/>
                </div>
              ))}
        </div>
    );
}