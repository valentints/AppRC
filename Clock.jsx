import React, { Component } from 'react'


function ShowBanner(props) {
    if(props.timer > 45){
        return(
            <div> A Descansar</div>
        )
   
}
    else {
        return(
        <div> A Entrenar </div>
        )
    }
}


export class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date()
        }
    }

    componentDidMount() {
        this.timeIS = setInterval(
            ()=> this.tick(), 1000
            )
    }


    componentWillUnmount() {
        clearInterval(this.timeIS ) 
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return (
            <div>
                <ShowBanner timer={this.state.date.getSeconds()}/>
                <h3>Current time { this.state.date.toLocaleTimeString() }</h3>
            </div>
        )
    }
}

export default Clock
