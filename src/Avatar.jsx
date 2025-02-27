export default function Avatar(props) {
 
    
    
    return (
        <>
            <img
            src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
            // alt={person.name}
            // width={size}
                // height={size}
                // {...props}
                width={props.width}
                height={props.height}
                border={props.border}
            />

            
        </>
        
   )
}
