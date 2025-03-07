import { sculptureList } from "./data.jsx"
import { useState } from "react"

export default function AppState() {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    function handleClick() {
        setIndex(index + 1)
    }
    function handleMoreClick() {
        setShowMore(!showMore)
    }
    let sculpture = sculptureList[index];

    return (
        <>
            <h1>app</h1>
            <button onClick={handleClick}>next</button>
            <h1>
                <i>{sculptureList.name}</i>
            </h1>
            <button onClick={handleMoreClick}>
                {showMore? "hide" : "show"} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img 
             src={sculpture.url} 
            alt={sculpture.alt}
            />
            
        </>
    )   
}