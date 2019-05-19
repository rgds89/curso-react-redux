import React from 'react'

export default props => 
    <div>
        <button onClick={
            ()=> 
                props.noticeExit('Praia')
            }
        >
            Vou Sair
        </button>
    </div>
