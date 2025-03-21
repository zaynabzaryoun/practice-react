import { act, useState } from "react"

function Panel({ title, children, active, onShow }) {
    // const [active, setActive] = useState(false)
    return (
        <>
            <section>
                <h2>{title}</h2>
                {active? <p>{children}</p> : <button onClick={onShow}>show</button> }
            </section>
        </>
    )
}



export default function Accordion() {
    const [activeIndex, setAtiveIndex] = useState(0)
    return (
        <>
        <h1>Almaty, Kazakhstan</h1>
        <Panel  title="About" active={activeIndex===0} onShow={() => setAtiveIndex(0)} >With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.</Panel>
        <Panel title="Etymology" active={activeIndex===1} onShow={()=> setAtiveIndex(1)}>The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <span style={{fontStyle: "italic"}}>Malus sieversii</span>  is considered a likely candidate for the ancestor of the modern domestic apple.</Panel>
        </>
    )
}