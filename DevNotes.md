```javascript
// App.jsx
function allNewDice() { //Imperative approach
    // array of 10 random nums
    const newDice = [] 

    for(let i = 0; i < 10; i++){
        const rando = Math.ceil(Math.random() * 6)
        newDice.push(rando)
    }
    return newDice
    console.log(allNewDice())

}
```

## Lesson 12 end game
critical thinking:
- game over when 1: all dice are held & 2: all dice have same value. How do this?
1. `gameWon` - save in state?  
No can use setDice to check if gameWon conditions are met

2. create side effect to synchronize gameWon value whether it's in state or not with the current state of the dice?  
No. Don-t need side effect. Can derive gameWon status based on condition of current dice state on every render

## Lesson 15 Lazy State Initialization - Refactor generateAllNewDice 
    ```javascript
    //Calling state every time re-render with roll button, holding dice, etc. generateAllNewDice function runs. It's meant to set initial state. 
    const [dice, setDice] = useState(generateAllNewDice())

    //Can provide initial value with function. React won't re-run generateAllNewDice on subsequent re-renders
    const [dice, setDice] = useState(() => generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }
    ```