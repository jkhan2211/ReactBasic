import React from 'react'
import Fruits from "./Fruits"
import FruitsCounter from "./FruitsCounter"
// test
function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    ])
  function handleClick() {
    let randNum = Math.floor(Math.random() * 3) +1;
    console.log(randNum)
    let userInput = prompt("Type a number")
    alert(`Computer number: ${randNum}, you guess: ${userInput}`)
  }
  return (
    <div className="App">
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Play</button>

      <h1>Where should the state go?</h1>
      
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
