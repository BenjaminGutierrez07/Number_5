import React, { useState } from 'react'
import './App.css'

class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  add() {
    this.setState({
      counter:this.state.counter + 1
    })
  }

  render() {
    return(
      <div className='App'>
        <h1 id='title'>{this.state.counter}</h1>
        <button id='click' onClick={() => {this.add()}}>diste click</button>
      </div>
    )
  }
} 

export default App
