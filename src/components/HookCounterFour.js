import React , {useState} from 'react'

export default function HookCounterFour() {
    const[items,setItems] = useState([]);
    const onClick=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
        
    }

    return (
        <div>
            <h1>useState Arrays</h1>
            <ul>
                <button onClick={onClick}>Add Item</button>
                {
                    items.map(item=>(
                    <li key={item.id}>
                        {item.value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
