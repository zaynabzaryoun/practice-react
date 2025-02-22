import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(4)

    function decrementCount() {
        setCount(previousCount => previousCount - 1) 
    }

    function incementCount() {
        setCount(previousCount => previousCount + 1)
    }

    return (<>
        <button onClick = {decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incementCount}>+</button>
    </>)
}