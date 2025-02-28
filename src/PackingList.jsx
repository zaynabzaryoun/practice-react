function Item({ name, isPacked }) {
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
            <li>{name} {isPacked && "*"}</li>
           
                
        </>
    )
}


function PackingList() {
    return (
        <>
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    <Item name="cake" isPacked={true} />
                    <Item name="tea" isPacked={true} />
                    <Item name="cloth" isPacked={false} />
                </ul>
            </section>
        </>
    )
}

export default PackingList;