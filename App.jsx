import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid" //generates random id

export default function App() {
    /**
     * array of numbers ---> array of objects
     * object is comprised of { value: <rando num>, isHeld: false }
     * Correct breaking code
     */


    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        //array of 10 random nums - Functional
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
        }))
    }
    //map over dice; Can also map in <main> 
    const diceElements = dice.map(dieObj => (
        <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld}/>))

    function rollDice() {
        setDice(allNewDice)
    }

    return (
        <main>
            <div className="dice-container">
            {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>
                Roll 
            </button>

        </main>
    )
}