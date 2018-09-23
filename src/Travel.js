import React from "react";
const Travel = props => (
    <figure>
        <h1>{props.destination}</h1>
        <h1>{props.country}</h1>
        <h1>{props.distance}</h1> 
        <img src ={process.env.PUBLIC_URL + props.photo}
                 />
    </figure>
);
export default Travel;
