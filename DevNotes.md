```javascript
// App.jsx
function allNewDice() { //Imperative
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