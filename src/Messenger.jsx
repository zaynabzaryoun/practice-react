import { useState } from "react";

export default function Messenger() {
    const [to, setTo] = useState(contacts[0])
    return (
        <>
            <ContactList contacts={contacts} selectedContact={to} onSelect={(contact)=> setTo(contact)}/>
            <Chat id={to.id} contact={to} />
        </>
    )
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
  
function Chat({ contact }) {
    const [text, setText] = useState("")
    return (
        <section className="chat">
            <textArea
                value={text}
                placeholder={"chat to " + contact.name}
                onChange={(e)=> setText(e.target.value)}
            
            />
            <br />
            <button>sent to {contact.email}</button>
        </section>
    )
}

function ContactList({selectedContact, contacts, onSelect}) {
    return(
        <section className="contact-list">
            <ul>
                {contacts.map(contact => 
                    <li key={contact.id}>
                        <button onClick={() => onSelect(contact)}>
                        {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    )
} 