import React, { Component } from 'react'

export default class CountComponent extends Component {
 state = {
    number: this.props.number
}

    another = () => {
        //this.state.number++
        this.setState({number: this.state.number + 1})
    }

    oneLess = () =>{
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.number}</div>
                <button onClick={this.another}>Inc</button>
                <button onClick={this.oneLess}>Dec</button>
            </div>)
    }
}

//Solução 01 - Função Bind
    /*constructor(props){
        super(props)
        this.another = this.another.bind(this)
    }*/

//Solução 02 - Função arrow na evento do click
//<button onClick={() => this.another()}>Inc</button>


//Solução 03 - Função arrow na construção do método.
/*another = () => {
        console.log(this)
        //this.props.number++
    }*/