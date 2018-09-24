import React from "react";
import Travel from "./Travel"
const array = [
    {
        destination:"Fuji",
        country:"Japon",
        distance:"9844km",
        photo:"MontFuji.jpg"
    },
    {
        destination:"Bryce Canyon",
        country:"USA",
        distance:"8628km",
        photo:"bryce.jpg"
    },
    {
        destination:"Rome",
        country:"Italie",
        distance:"1230km",
        photo:"rome.jpeg"
    },
    {
        destination:"Prague",
        country:"Republique Tcheque",
        distance:"1208km",
        photo:"prague.jpeg"
    },
    {
        destination:"Son Doong Cave",
        country:"Viet Nam",
        distance:"10067km",
        photo:"SongDoong-Cave-2.jpg"
    },
];
const Travels = () => (
    <div>
        {array.map(ele=> (
            <Travel destination={ele.destination} country={ele.country} distance={ele.distance} photo={ele.photo}/>
        ))}
    </div>
);

export default Travels;