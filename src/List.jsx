import { use, useState } from 'react';

// let nextId = 0;

// export default function List() {
//     const [name, setName] = useState("")
//     const [artists, setArtists] = useState([])

//     return (
//         <>
//             <h1>inspiring sculptors:</h1>
//             <input value={name} onChange={e => setName(e.target.value)} />
//             <button onClick={() => {
//                 setArtists([
//                     ...artists,
//                     {id: nextId++, name: name}
//                 ])
//             }}>add</button>
//             <ul>
//                 {artists.map(artist => (
//                     <li key={artist.id}>{artist.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }


// export default function List() {
//     const [name, setName] = useState("")
//     const [artists, setArtists] = useState([])

//     let nextId = 0
//     return (
//         <>
//             <input type="text" value={name} onChange={(e) => { setName(e.target.value); }}/>
//             <button onClick={() => {
//                 // setArtists(artists.push(name))
//                 setArtists([...artists, name])
//             }}>send</button>
//             {
//                 <ul>
//                     {artists.map(artist => <li key={nextId++}>{artist}</li>)}
//                 </ul>
//             }
//         </>
//     )
// }


let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];
  
export default function List() {
    const [artists, setArtists] = useState(initialArtists)
    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <ul> 
                {
                    artists.map((artist) => {
                        return <li key={artist.id}>
                            {artist.name}{" "}
                            <button onClick={() => {
                                let filteredArtists = artists.filter((arti) => arti.id !== artist.id)
                                setArtists(filteredArtists)
                            }}>delete</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}