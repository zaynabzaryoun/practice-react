function AppEvent() {

  

    return (
        <>
            <h1>AppEvent component</h1>
            <Toolbar handleDisplayMovie={()=>{alert("display movie")}} handleUploadingFile={()=> {  alert("upload file")}}/>
        </>
        
    )
}



function Toolbar({handleDisplayMovie, handleUploadingFile}) {
    return (
        <>
            <Button onSmash={handleDisplayMovie}>displaying movie</Button>
            <Button onSmash={handleUploadingFile}>uploading file</Button>
        </>
    )
}



function Button({onSmash, children}) {
    return (
        <>
            <button onClick={onSmash}>{children}</button>
        </>
    )
}










export default AppEvent;