import React, {useState, useEffect} from 'react'

export default props =>{
    const [count, setCount] = useState(100)
    const [status, setStatus] = useState('Par')

    useEffect(() => {
        count % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })
    return(
        <div>
            <h1>{status}</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
        </div>
    )
}