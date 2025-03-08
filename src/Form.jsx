import { use, useState } from "react"

export default function Form() {
    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState("hi")
    if (isSent) {
        return<h1>your message is on its way</h1>
    }
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsSent(true)
                sendMessage(message)
            }}>
                <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} />
                <button type="submit">send</button>
            </form>
        </>
    )
}

function sendMessage() {
    //...
}