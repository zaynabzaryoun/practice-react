// // function Button({message, children}) {

// //     function handleClick() {
// //         alert(message)
// //     }
// //     return (
// //         <button onClick={handleClick}>{children}</button>
// //     )
// // }

// // export default function Toolbar() {
// //     return (
// //         <>
// //             <Button message="playing">
// //                 play movie
// //             </Button>
// //             <Button message="uploading">
// //                 upload image
// //             </Button>
// //         </>
// //     )
// // }








// function Button({onClick, children}) {
//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }


// function PlayButton({ movieName }) {
    
//     function handlePlayClick() {
//         alert(`playing ${movieName}`)
//     }
//     return (
//         <>
//             <Button onClick={handlePlayClick}>
//                 play "{movieName}"
//             </Button>
//         </>
//     )
// }


// function UploadButton() {
//     function handleUploadButton() {
//         alert("uploading movie")
//     }
//     return (
//         <>
//             <Button onClick={handleUploadButton}>
//                 upload movie
//             </Button>
//         </>
//     )
// }

// export default function Toolbar() {
//     return (
//         <>
//             <PlayButton  movieName = "Kiki's Delivery Service" />
//             <UploadButton />
//         </>
//     )
// }

export default function Toolbar() {

    function handleMovie(e) {
        e.stopPropagation()
        alert('movieee')
    }
    return (
        <div onClick={() => { alert("you have clicked the toolbar") }}>
            <button onClick={handleMovie}>play movie</button>
            <button onClick={()=> {alert("uploadign movie")}}>upload movie</button>
        </div>
    )
} 