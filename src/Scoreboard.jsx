import { useState } from "react";

export default function Scoreboard() {
    const [playerA, setPlayerA] = useState(true)
    return (
        <>
            {playerA ? <Counter person="sara" key="sara" /> : <Counter person="maryam" key="maryam" />}
            <button onClick={()=> setPlayerA(!playerA)}>next player</button>
        </>
    )
}

function Counter({person}) {
    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(false)

    const style = {
        border: "black 1px solid",
        padding: "5px",
        width: "89px",
        backgroundColor: hover? "yellow" : "white"
    }

    return (
        <>
            <div onPointerEnter={()=> setHover(true)} onPointerLeave={()=> setHover(false)} style={style}>
                 <h1>{person}s score is {score}</h1>
                <button
                    onClick={()=> setScore(score+1)}
                >add one</button>
            </div>
        </>
    )
}