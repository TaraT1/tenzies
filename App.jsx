import { useState } from "react"
import Die from "./Die"

export default function App() {
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        //array of 10 random nums - Functional
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    //map over dice; Can also map in <main> 
    const diceElements = dice.map(num => <Die value={num} />)

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