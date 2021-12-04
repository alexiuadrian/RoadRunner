import React, { Navigate, useState, useEffect } from 'react-router';
import { useNavigate } from 'react-router-dom';
import plus from '../assets/plus.svg';
import running from '../assets/running.svg';
import signout from '../assets/signout.svg';

export default function Navbar(props) {

    const navigate = useNavigate();

    function handleSignout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <header>
            <ul class="nav justify-content-center">
                <li class="nav-item m-2">
                    <a class="nav-link" aria-current="page" href="/">
                        <img
                            class="runButton"
                            src={running}
                            alt="running button"
                            width='30px'
                            height='30px'
                        />
                    </a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link" href="/add">
                        <img
                            class="plusButton"
                            src={plus}
                            alt="plus button"
                            width='30px'
                            height='30px'
                        />
                    </a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link">
                        <img
                            class="signoutButton"
                            src={signout}
                            alt="signout button"
                            width='30px'
                            height='30px'
                            onClick={() => handleSignout()}
                        />
                    </a>
                </li>
            </ul>
        </header>
    );
}