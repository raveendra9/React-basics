import React, { Component } from 'react'
import Welcome from './welcome'

export default class Hi extends Component {
  constructor(){
    super()
      this.state = {
        message: 'React JS Course'
    }
  }
  changeMessage(){
    this.setState({
      message: 'Welcome to React js Course'
    })
  }
  render() {
    return (
      <div>
        <Welcome value={this.state.message}/>
        <h1>{this.state.message}</h1>
        <button onClick = {() => this.changeMessage()}>Enroll</button>
      </div>
    )
  }
}
