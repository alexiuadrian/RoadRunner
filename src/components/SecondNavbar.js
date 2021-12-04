import React, { useState, useEffect } from 'react-router';
import filter from '../assets/filter.svg';
import file from '../assets/file.svg';

export default function SecondNavbar(props) {


    return (
        <header>
            <ul class="nav justify-content-center">
                <li class="nav-item m-2">
                    <a class="nav-link" aria-current="page" href="filter">
                        <img
                            class="runButton"
                            src={filter}
                            alt="filter button"
                            width='30px'
                            height='30px'
                        />
                    </a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link" href="report">
                        <img
                            class="plusButton"
                            src={file}
                            alt="file button"
                            width='30px'
                            height='30px'
                        />
                    </a>
                </li>
            </ul>
        </header>
    );
}