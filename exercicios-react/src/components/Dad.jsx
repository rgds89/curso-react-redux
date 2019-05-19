import React from 'react'
import Child from './Child'

export default props =>{
    const noticeExit= place => alert(`Liberado para ${place}`)

    return (
        <div>
            <Child noticeExit={noticeExit} />
        </div>
    )
}