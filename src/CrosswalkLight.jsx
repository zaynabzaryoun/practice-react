import { useState } from "react"

export default function CrosswalkLight() {
    const [move, setMove] = useState(true)

    function handleClick() {
        setMove(!move)
        alert(move ? "Walk is next" :"stop is the next")
    }
    return (<>
        <button onClick={handleClick}>change to {move? "Walk" : "Stop"}</button>
        <h1 style={{color: move? "red" : "green"}}>{move? "Stop" : "Walk"}</h1>
    </>)
}