import React, { Component } from 'react'


export default class ButtonWr extends Component {
    constructor(props) {
        super(props)

        this.myBtnClick = this.myBtnClick.bind(this);
       
    }

    myBtnClick() {
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = " #8a3a5e";
        
       
    }
    
    render() {

        let styleBttn ={
            margin: "0 auto",
            borderRadius: "15px",
            backgroundColor: "#e3c5c3",
        };
               
        return (
            <button onClick={this.myBtnClick} style={ styleBttn }>change wrapper style</button>
        )
    }
}
