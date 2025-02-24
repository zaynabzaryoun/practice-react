import {useState} from "react"
import "./Button.css"

export default function Button() {

    const [count, setCount] = useState(0); 
    function handleButtonClick() {

        setCount(previousCount => previousCount + 1)
        alert(`you clicked me ${count}`)
    }

    const isDarkMode = true
    return (
        <button onClick={handleButtonClick} className="btn" style={{ backgroundColor: isDarkMode ? "black" : "white" }}>dark mode is {isDarkMode ? "on" : "off"} {count}</button>
    )
}