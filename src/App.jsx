import "./App.css"

function MyButton() {
  return (
    <button style={{ color: 'blue' }}>im a button!</button>
  )
}


function App() {

 

  return (
    <>
      <h1 className="color">hello , welcome to my app</h1>
    <MyButton />
    </>
  )
}

export default App
