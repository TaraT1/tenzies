import React, { useState, useRef, useEffect } from "react"
import Die from "./Die"
import { nanoid } from "nanoid" //3rd party pkg that generates random id
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const buttonRef = useRef(null)

    // check if all dice are held and all dice have same value
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === dice[0].value)

    const gameWon = allHeld && allSameValue

    useEffect(() => {
        if(gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
        }))
    }

    function rollDice() {
        if(!gameWon) { 
            setDice(oldDice => oldDice.map(die =>
            die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6 )}
        )) 
        } else {
            setDice(generateAllNewDice())
        }  
    }
    
    function hold(id) {//change isHeld depending whether clicked
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold={hold} //2hold={(dieObj.id)} (don't need to pass down id in next line)
            id={dieObj.id}
            />
        ))
    
    return ( 
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>You won! Press "New Game" to play again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>

            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game"  : "Roll"} 
            </button>

        </main>
    )
}