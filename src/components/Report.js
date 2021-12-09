import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Navbar';
import SecondNavbar from './SecondNavbar';
import ReportCard from './ReportCard';

export default function Report(props) {

    const [report, setReport] = useState('');

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios
        .get("https://roadrunnerapi.herokuapp.com/api/report",
        {
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log(res.data);
            setReport(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <Navbar/>
            <SecondNavbar/>

            <div class="filter mt-4">
                <div class='mt-3'>
                    <ReportCard data={report}/>
                </div>
            </div>
        </div>
    );
}