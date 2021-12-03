import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import Run from './Run';
import Navbar from './Navbar'

export default function AllRuns(props) {
    const [runs, setRuns] = useState(null);

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
            <h1>My runs</h1>
            {runs &&
              runs.map((run, index) => (
                <Run class='mt-1' data={run}/>
              ))}
        </div>
    );
}