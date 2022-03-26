import React from "react"
import locationDot from "../images/location-dot-solid.svg"

export default function Destination(props) {
    return (
        <div className="destination">
            <img src={props.item.imageUrl} className="destination--image" />
            <div className="destination--info">
                <div className="destination--location">
                    <img src={locationDot} />
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="destination--title">{props.item.title}</h1>
                <h3 className="destination--dates">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="destination--summary">{props.item.description}</p>
            </div>
        </div>
    )
}