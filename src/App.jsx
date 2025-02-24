// import Button from "./Button"
import "./App.css"
// import Counter from "./Counter"
import Gallary from "./Gallary"

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
      <Gallary />
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
