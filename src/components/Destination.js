import React from "react";

export default function Destination(props) {
    return (
        <section className="destination-container">
            <img className="destination-image" src={props.item.image} alt="destination-img" />
            <div className="location-country">
                <img src="https://img.icons8.com/office/16/undefined/marker.png" alt="marker" />
                <h4>{props.item.location.toUpperCase()}</h4>
                <a href={props.item.link}>View on Google Maps</a>
                <h2>{props.item.title}</h2>
                <h5>{props.item.start} - {props.item.end}</h5>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}