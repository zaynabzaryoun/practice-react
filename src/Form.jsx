import { use, useState } from "react"

// export default function Form() {
//     const [isSent, setIsSent] = useState(false)
//     const [message, setMessage] = useState("hi")
//     if (isSent) {
//         return<h1>your message is on its way</h1>
//     }
//     return (
//         <>
//             <form onSubmit={(e) => {
//                 e.preventDefault();
//                 setIsSent(true)
//                 sendMessage(message)
//             }}>
//                 <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} />
//                 <button type="submit">send</button>
//             </form>
//         </>
//     )
// }

// function sendMessage() {
//     //...
// }

export default function Form() {
    const [message, setMessage] = useState("hi")
    const [to, setTo] = useState("Alice")

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(()=> {
                alert(`you sent ${message} to ${to}`)} , 3000)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="section-name"> to {" "}
                    <select name="section" id="section-name" value={to} onChange={e=> setTo(e.target.value)}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>
                <textarea placeholder="message" value={message} onChange={e => setMessage(e.target.value)} />
                <button type="submit">send</button>
            </form>
        </>
    )
}