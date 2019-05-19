import React from 'react'

const approved = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const generateItems = items => {
        return items.map(item => <li>{item}</li>)
    }

    return (
        <div>
            <h1>Approved</h1>
            <ul>
                {generateItems(approved)}
            </ul>
        </div>
    )
}