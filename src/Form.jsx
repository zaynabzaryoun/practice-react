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

// export default function Form() {
//     const [message, setMessage] = useState("hi")
//     const [to, setTo] = useState("Alice")

//     function handleSubmit(e) {
//         e.preventDefault();
//         setTimeout(()=> {
//                 alert(`you sent ${message} to ${to}`)} , 3000)
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="section-name"> to {" "}
//                     <select name="section" id="section-name" value={to} onChange={e=> setTo(e.target.value)}>
//                         <option value="Alice">Alice</option>
//                         <option value="Bob">Bob</option>
//                     </select>
//                 </label>
//                 <textarea placeholder="message" value={message} onChange={e => setMessage(e.target.value)} />
//                 <button type="submit">send</button>
//             </form>
//         </>
//     )
// }


// export default function Form() {
//     const [person, setPerson] = useState({
//         firstName: "barbara",
//         lastName: "hepwordth",
//         email: "bar@gmail.com"
//     });

//     function handleFirstNameChange(e) {
//         setPerson({
//             ...person,
//             firstName: e.target.value
//         });

//     }

//     function handleLastNameChange(e) {
//         setPerson({
//             ...person,
//             lastName: e.target.value
//         })
//     }

//     function handleEmailChange(e) {
//         setPerson({
//             ...person,
//             email: e.target.value
//         })
//     }
//     return (
//         <>
//             <label>
//                 first name:
//                 <input name="firstname" value={person.firstName} onChange={handleFirstNameChange} />
//             </label>
//             <label>
//                 last name:
//                 <input name="lastname" value={person.lastName} onChange={handleLastNameChange} />
//             </label>
//             <label>
//                 email:
//                 <input name="email" value={person.email} onChange={handleEmailChange} />
//             </label>
//             <p>
//                 {person.firstName}{" "}
//                 {person.lastName}{" "}
//                 {person.email}
//             </p>
//         </>
//     )
// }




export default function Form() { 
    const [person, setPerson] = useState({
        firstname: "barbara",
        lastname: "hepwordth",
        email: "bar@gmail.com"
    });

    function handleChange(e) {

        setPerson({...person,
           [e.target.name]: e.target.value 
        })
    }

  
    return (
        <>
            <label>
                first name:
                <input name="firstname" value={person.firstname} onChange={handleChange} />
            </label>
            <label>
                last name:
                <input name="lastname" value={person.lastname} onChange={handleChange} />
            </label>
            <label>
                email:
                <input name="email" value={person.email} onChange={handleChange} />
            </label>
            <p>
                {person.firstname}{" "}
                {person.lastname}{" "}
                {person.email}
            </p>
        </>
    )
}