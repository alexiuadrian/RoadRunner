import React, {useContext, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";

export default function Run(props) {

    const navigate = useNavigate();

    function formatTime() {
        const hoursAndMinutes = props.data.time.split(" ");

        if (hoursAndMinutes[0] == 0) {
            return (hoursAndMinutes[1] + ' minutes');
        }
        else if (hoursAndMinutes[0] == 1) {
            return (hoursAndMinutes[0] + ' hour and ' + hoursAndMinutes[1] + ' minutes');
        }
        else {
            return (hoursAndMinutes[0] + ' hours and ' + hoursAndMinutes[1] + ' minutes');
        }
    }
    
    function formatDate() {
        var d = props.data.date.slice(0, 10);

        return d;
    }

    function handleDelete() {
        axios
        .delete("http://localhost:3000/api/runs/" + props.data.id,
        {
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
        })
        .catch((err) => {
            console.log(err);
        });
        navigate('/');
    }

    return (
        <div>
            <div class="card shadow-lg">
                <div class="card-body">
                    <h5 class="card-title">
                        You ran 
                        {' ' + props.data.distance + ' km '}
                        in  
                        {' ' + formatTime()}
                     </h5>
                    <p class="card-text">
                    Congratulations! You had an average speed of {props.data.average_speed.toFixed(2)} km/h.
                    </p>
                    <h6>{formatDate()}</h6>
                </div>
                <div class="d-flex justify-content-evenly mb-3">
                    <div>
                        <a href="edit">
                            <img
                                class="editButton"
                                src={edit}
                                alt="trash button"
                            />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img
                                class="deleteButton"
                                src={trash}
                                alt="trash button"
                                onClick={handleDelete}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}