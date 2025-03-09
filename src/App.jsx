import Button from "./Button"
import "./App.css"
import Counter from "./Counter"
import Gallery from "./Gallery"
import TodoList from "./TodoList"
import PackingList from "./PackingList"
import AppEvent from "./AppEvent"
import Toolbar from "./Toolbar"
import Signup from "./Signup"
import AppState from "./AppState"
import Form from "./Form"
import CrosswalkLight from "./CrosswalkLight"


function App() {

  // const user = {
  //   name: "sara", 
  //   lasrname: "nazari"
  // }
  
  // const products = [
  //   { title: 'Cabbage', id: 1 },
  //   { title: 'Garlic', id: 2 },
  //   { title: 'Apple', id: 3 },
  // ];

  // const productList = products.map((product) => {return <li style={{color: product.title === "Apple"? "pink" : "black" }} key={product.id}>{product.title}</li>})
  return (
    <>
      {/* <Gallery /> */}
      {/* <TodoList /> */}
      {/* <PackingList /> */}
      {/* <AppEvent /> */}
      {/* <Toolbar /> */}
      {/* <Signup /> */}
      {/* <AppState /> */}
      {/* <AppState /> */}
      {/* <Form /> */}
      <CrosswalkLight />
      {/* <h1 className="heading">hello , welcome to my app</h1>
      <p>{"user name: " + user.name}</p>
      {
        <ul>{productList}</ul>
      } */}

      {/* <Button /> */}
      {/* <Counter /> */}
    </>
  )
}

export default App
