import React, { useState } from 'react'

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
        <h1>{this.state.counter}</h1>
        <button onClick={() => {this.add()}}>diste click</button>
      </div>
    )
  }
} 

export default App
