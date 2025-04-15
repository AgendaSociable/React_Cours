import { useReducer, useState } from 'react';
import React from 'react'
import './App.css';
import { initialState, reducer } from './services/lettres';

function App() {
  const [lettre, setLettre] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, initialState);


  const handleChange = (e) => {
    e.target.value = e.target.value.toUpperCase()
    setLettre(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

      if (!state.lettres.includes(lettre)) {
        dispatch({ type: "ADD_LETTRE", payload: lettre })
      } else {
        alert("Lettre déjà utilisé")
      }
  
      setLettre("")
    
  }



  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input id="text_lettre" type="text" onChange={handleChange} value={lettre} maxLength="1"/>
          <button disabled={lettre.length !==1} id="button" type="submit">Push the letter !</button>
        </form>
        <button onClick={() => dispatch({ type: "SHUFFLE"})}>Shuffle</button>
        <ul>
          {state.lettres.map((lettre, i) => (
            <li key={i}>{lettre}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
