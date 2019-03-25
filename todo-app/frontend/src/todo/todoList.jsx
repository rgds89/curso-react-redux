import React from 'react'
import Btn from '../template/iconButton'
import {connect} from 'react-redux'

const TodoList = props =>{

    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Btn style='success' icon='check' onClick={() =>props.handleMarksAsDone(todo)} hide={todo.done}></Btn>
                    <Btn style='warning' icon='undo' onClick={() =>props.handleMarksAsPending(todo)} hide={!todo.done}></Btn>
                    <Btn style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done}></Btn>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)