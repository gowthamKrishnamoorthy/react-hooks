import React , {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count , setCount] = useState(initialCount)
    const incrementFive=()=>{
        for (let i = 0; i < 5; i++) {
            setCount(previousCount => previousCount+1)
        }
    }
    return (
        <div>
            <h1>Hooks multiple</h1>
            Count: {count}
            <button onClick={()=> setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(previousCount => previousCount+1)}>Increment</button>
            <button onClick={()=>  setCount(previousCount => previousCount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment By 5</button>
        </div>
    )
}

export default HookCounterTwo
