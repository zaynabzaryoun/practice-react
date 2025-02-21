import {useState} from "react"
import "./Button.css"

export default function Button() {

    const [count, setCount] = useState(0); 

    function handleButtonClick(name) {

        setCount(previousCount => {
            newCount = previousCount + 1;
            return newCount
        })
        alert(`you clicked me ${newCount}`)
    }

    const isDarkMode = true
    return (
        <button onClick={() => handleButtonClick("sara")} className="btn" style={{ backgroundColor: isDarkMode ? "black" : "white" }}>dark mode is {isDarkMode ? "on" : "off"} {newCount}</button>
    )
}