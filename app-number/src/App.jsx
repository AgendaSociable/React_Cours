import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [number, setNumber] = useState("")
  const [list, setList] = useState([])

  var randNumb = 0;

  function RandomInt(max){
    return Math.floor(Math.random() * max);
  }

  function handleClick(){
    randNumb = RandomInt(11) + ", ";
    const newList = [ ...list, randNumb ];
    setNumber(randNumb)
    setList(newList)
  }

  // function shuffleClick(array){

  //    const randomList = array.sort(() => Math.random() - 0.5);
  //    setList(randomList);

  // }

  console.log(list)

  return (
    <>

      <div className="card">
        <button onClick={(handleClick)}>
          Last random number generated is {number}
        </button>
        <p>
          {list}
        </p>
        {/* <button onClick={(shuffleClick(list))}>
          Shuffle the list
        </button> */}
      </div>
    </>)
  
}

export default App
