import React ,{useState} from 'react'

export default function HookCounterThree() {
    const [name, setName] = useState({firstName:'',lastName:''})
    return (
        <div>
            <h1>useState objects</h1>
            <form>
                <input type = 'text' 
                value ={name.firstName}
                onChange={e=>setName({...name,firstName:e.target.value})} 
                ></input>
                <input type = 'text' 
                value ={name.lastName}
                onChange={e=>setName({...name,lastName:e.target.value})} 
                ></input>
                <h3>your first name is {name.firstName}</h3>
                <h3>your Last name is {name.lastName}</h3>
            </form>
            
        </div>
    )
}
