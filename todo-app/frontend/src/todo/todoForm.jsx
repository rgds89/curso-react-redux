import React, {Component} from 'react'
import Grid from '../template/grid'
import Btn from '../template/iconButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeDescription, search, add, clear} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(event){
        const {add, search, description, clear} = this.props
        if(event.key === 'Enter'){
            event.shiftKey ? search() : add(description)
        }else if (event.key === 'Escape'){
            clear()
        }
    }

    render(){
        const {add, search, description} = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
        
                <Grid cols='12 3 2'>
                    <Btn  style='primary' icon='plus' onClick={() => add(description)}/>
                    <Btn style='info' icon='search' onClick={search} />
                    <Btn style='default' icon='eraser' onClick={this.props.clear}/>
                </Grid>
            </div>
        )
    }
}




const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(TodoForm)