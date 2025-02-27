import { Children } from "react"
import Avatar from "./Avatar"

function Card({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

export function Profile(props) {
    return (
        <>
            <Card>
            {/* <Avatar
            // person={{ name: "sara", imgId: "8396" }}
                {...props}
            /> */}
                <h1>byeeeee</h1>
            </Card>
            
            <Card>
                <Avatar 
                // person={{name: "ali", imgId: "6353"}}
                {...props}
            />
                
           </Card>
            
        </>
    )
}