import React from "react";
import { useNavigate } from 'react-router-dom';
import notfound from "../assets/notfound.png";
import running from '../assets/running.svg';

export default function NotFound(props) {
    const navigate = useNavigate();

    return (
        <div>
            <img src={notfound} className="notFoundImage"/>
            <h3 className="notFoundText">This Page is Not on the Map</h3>
            <a class="nav-link" aria-current="page" href="/">
                <img
                    class="runButtonNotFound"
                    src={running}
                    alt="running button"
                    width='50px'
                    height='50px'
                />
            </a>
        </div>
    );
}