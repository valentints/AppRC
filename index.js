import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Clock from './App/Clock'
import ButtonWr from './App/ButtonWr'

export class App extends Component {
    render() {

        let sty = {
            hight: 400,
            width: 650,
            padding: 0,
            margin: "0 auto" ,
            boxShadow: "0px 0px 5px #666"
        };
        
        return (
            <div className="wrapper" style={sty}>
                <h1>Start beginig..</h1>
                <Clock />
                <ButtonWr />
            </div>
        )
    }
}

export default App



ReactDOM.render( <App />, document.getElementById('root'))