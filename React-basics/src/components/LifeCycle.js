import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Raveendra"
      }
      console.log('LifeCycle constructor')
    }

    componentDidMount() {
        console.log('LIfecycle Didmount')
    }
    
  render() {
    console.log('Lifecycle render')
    return (
      <div>
        LifeCycle
      </div>
    )
  }
}

export default LifeCycle
