import React from "react";

export default function Run(props) {
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
            </div>
        </div>
    );
}