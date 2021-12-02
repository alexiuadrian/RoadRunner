import React, {useContext, useState, useEffect} from "react";
import axios from "axios";

export default function AllRuns(props) {
    const [items, setItems] = useState(null);

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
            setItems(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <div>
            <h1>My runs</h1>
            <h2>{localStorage.getItem('token')}</h2>
        </div>
    );
}