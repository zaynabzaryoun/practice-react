import {useState} from "react"
import "./Button.css"

export default function Button() {

    // function habdleClick() {
    //     alert("you clicked the button")
    // }

    return (
        <button onClick={()=> alert("clicked")} className="btn">click me</button>
    )
}