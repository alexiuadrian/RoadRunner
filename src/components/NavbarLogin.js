import React, { Navigate } from 'react-router';
import register from '../assets/register.svg';
import signin from '../assets/signin.svg';

export default function NavbarLogin(props) {

    return (
        <header>
            <ul class="nav justify-content-center">
                <li class="nav-item m-2">
                    <a class="nav-link" aria-current="page" href="/login">
                        <img
                            class="loginButton"
                            src={signin}
                            alt="signin button"
                            width='30px'
                            height='30px'
                        />
                    </a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link" href="/register">
                        <img
                            class="registerButton"
                            src={register}
                            alt="register button"
                            width='30px'
                            height='30px'
                        />
                    </a>
                </li>
            </ul>
        </header>
    );
}