export default function Signup(){
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                alert("submitting")
            }}>
                <input />
                <button>send</button>
            </form>
        </>
    )
}