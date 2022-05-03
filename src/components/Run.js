import React, {useContext, useState, useEffect} from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { useNavigate } from 'react-router-dom';
import Edit from "./Edit";
import axios from "axios";
import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import close from "../assets/close.svg";

export default function Run(props) {

    const [editMode, setEditMode] = useState(false);
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

    function refreshPage() {
        window.location.reload(false);
    }

    function handleDelete() {
        axios
        .delete("http://localhost:3000/api/runs/",
        {   
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            },
            data: {
                id: props.data.id,
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err, props.data.id);
        });

        // refreshPage();
    }

    function handleExit() {
        unmountComponentAtNode(document.getElementById('edit'));
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
                        <a>
                            <img
                                class="editButton"
                                src={edit}
                                alt="trash button"
                                width="30px"
                                height="30px"
                                onClick={() => {
                                    setEditMode(true);
                                }}
                            />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img
                                class="deleteButton"
                                src={trash}
                                alt="trash button"
                                width="30px"
                                height="30px"
                                onClick={handleDelete}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                {editMode && <Edit id="id" data={props.data} />}
            </div>
        </div>
    );
}