import React, { Component } from 'react'

class Message extends Component {

    constructor(){
     super()
     this.state = {
       message: 'Welcome visitor'
     }
    }


    changeMessage() {
      this.setState({
        message: 'Thanks for your click'
      })
    }
render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
	<button onClick={() => this.changeMessage()}>Suscribe</button>
      </div>
    ) 
  }
}

export default Message;
