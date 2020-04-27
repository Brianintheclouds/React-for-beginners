import React, { Component } from 'react';

class ClassClick extends Components {

  function clickHundler(){
    console.log('Clicked the button')
  }

  render() {
    <div>
      <button onClick={this.clickHandler}></button>
    </div>
  }
}
