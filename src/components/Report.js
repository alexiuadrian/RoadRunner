import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Navbar';
import SecondNavbar from './SecondNavbar';
import ReportCard from './ReportCard';

export default function Report(props) {

    const [report, setReport] = useState('');
    const [reportName, setReportName] = useState('');

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        axios
        .get("http://localhost:3000/api/report",
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

    function saveReport() {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };

        axios
        .post("http://localhost:3000/api/save_report",
        {
            report_name: reportName,
        }
        , config)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

        setReportName('');
    }

    return (
        <div>
            <Navbar/>
            <SecondNavbar/>

            <div class="filter mt-4">
                <div class='mt-3'>
                    <ReportCard data={report}/>
                </div>
                <div class='mt-3'>
                    <input type="text" class="form-control" placeholder="Give this report a name" onChange={(e) => setReportName(e.target.value)}/>
                    
                </div>
                <div class='mt-3'>
                    <button class="btn btn-primary" onClick={() => saveReport()}>Backup</button>
                </div>                    
            </div>
        </div>
    );
}