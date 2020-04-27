import React, { Component } from 'react';

class EventBind extends Component {
 constructor(props) {
   super(props)
   
   this.state = {
     message: 'Hello'
   }
 }

 // clickHandler(){
 //   this.setState({
 //     message: 'Googbye'
 //  })
 // }
  
  clickHnadler = () => {
    this.setState({
      message: 'GoodBye'
    }) 
  }

  render(){
    <div>{this.state.message}</div>
    <button onClick={this.clickHandler}>CLICKME</button>
  }
}
