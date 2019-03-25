import React from 'react'
import Grid from '../template/grid'
import Btn from '../template/iconButton'

export default props => {
    const keyHandler =(e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </Grid>
    
            <Grid cols='12 3 2'>
                <Btn  style='primary' icon='plus' onClick={props.handleAdd}/>
                <Btn style='info' icon='search' onClick={props.handleSearch} />
                <Btn style='default' icon='eraser' onClick={props.handleClear}/>
            </Grid>
        </div>
    )
}