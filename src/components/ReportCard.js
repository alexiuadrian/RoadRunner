import React from "react";

export default function ReportCard(props) {

    return (
        <div>
            <div class="card shadow-lg">
                <div class="card-body">
                    <h5 class="card-title">
                    Wow! This week you ran an average distance of {props.data.average_distance} km
                    with with an average speed of {props.data.average_speed} km/h.
                    </h5>
                    <p class="card-text">
                        Keep going!
                    </p>
                </div>
            </div>
        </div>
    );
}