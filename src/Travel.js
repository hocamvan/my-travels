import React from "react";
const Travel = props => (
    <figure>
        <h1>{props.destination}</h1>
        <h1>{props.country}</h1>
        <h1>La distance est de {props.distance} de la France</h1> 
        <img src ={process.env.PUBLIC_URL + props.photo}
                 />
    </figure>
);
export default Travel;
