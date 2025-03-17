import { useState } from "react"
import {initialTravelPlan} from "./places.js"

function PlaceTree({ id, placesById }) {
    const place = placesById[id]
    const childIds = place.childIds;
    return (
        <>
            <li>
                {place.title}
                {childIds.length > 0 && (
                    <ol>
                        {childIds.map(childIds => (
                            <PlaceTree  key={childIds} id={childIds} placesById={placesById} />
                        ))}
                        
                    </ol>
                )}
            </li>
        </>
    )
}


export default function TravelPlan(){
    const [plan, setPlan] = useState(initialTravelPlan)
    const root = plan[0]
    const planetIds = root.childIds
    return (
        <>
            <h2>
                places to visit
            </h2>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree key={id} id={id} placesById = {plan} />
                ))}
            </ol>
        </>
    )
}