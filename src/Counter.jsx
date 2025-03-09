import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0)

    // function decrementCount() {
    //     setCount(previousCount => previousCount - 1) 
    // }

    // function incementCount() {
    //     setCount(previousCount => previousCount + 1)
    // }

    return (<>
        {/* <button onClick = {decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incementCount}>+</button> */}
        <h1>{count}</h1>
        <button onClick={() => {
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1)
            // setCount((prev) => prev + 1)
            // setCount(prev => prev + 1)
            // setCount(prev => prev + 1)
            setCount(count + 5);
            setTimeout(() => {
               alert(count) 
            }, 3000)
        }}>5+</button>
    </>)
}