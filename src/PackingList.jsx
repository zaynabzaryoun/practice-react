// import {people} from "./data.jsx"
import { getImageUrl } from "./util.jsx"

function Item({ name, isPacked }) {
    let itemContent = name
    if (isPacked) {
        itemContent = (
            <del>{name + "*"}</del>
        )
    }
    
    // if (isPacked) {
    //     return null
    // }
    // return (<li>{name}</li>)
    return (
        <>
            {/* <li className="item">{name} {isPacked? "*" : "" } </li> */}
            {/* <li>{isPacked ? (
            <del>name + " *" </del>
            ) : 
            (name)
             }</li> */}
            {/* <li>{name} {isPacked && "*"}</li> */}
           
            <li>{itemContent}</li>    
        </>
    )
}

// const people2 = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];
  
function List() {
    const listItem = people.filter(e =>  e.profession === 'chemist' )
    console.log(listItem);
    const list2 = listItem.map(e => <li key={e.id}>
        <p>
            <img src={getImageUrl(e.imageId)} alt={e.name} />
            <b>{e.name}</b>
          {" " + e.profession + " "}
            id:  {" " +e.id}
        </p>
    </li>)
    return (
        <>
            <ul>{list2}</ul>
        </>
    )
}


function PackingList() {
    return (
        <>
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    {/* <Item name="cake" isPacked={true} />
                    <Item name="tea" isPacked={true} />
                    <Item name="cloth" isPacked={false} /> */}
                    <List />
                </ul>
            </section>
        </>
    )
}

export default PackingList;