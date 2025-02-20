import Button from "./Button"
import "./App.css"

function App() {

  const user = {
    name: "sara", 
    lasrname: "nazari"
 }

  return (
    <>
      <h1 className="heading">hello , welcome to my app</h1>
      <p>{"user name: " + user.name}</p>
      <Button />
    </>
  )
}

export default App
