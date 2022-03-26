import React from "react"
import Navbar from "./components/Navbar"
import Destination from "./components/Destination"
import data from "./data"

export default function App(){
    const destinations = data.map(item => {
        return (
            <Destination
                key={item.title}
                item={item}
             />
        )
    })
    
    return (
        <div className="container">
            <Navbar />
            <section className="destination--container">
                {destinations}
            </section>
        </div>
    )
}