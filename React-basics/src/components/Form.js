import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Username:'',
         Comments:'',
         Topic:''
      }
    }
    handleUsernameChange = (event) => {
        this.setState({
            Username:event.target.value
        })
    }
    handleCommentChange = (event)=> {
        this.setState({
            Comments:event.target.value
        })
    }
    handleTopicChange= (event)=>{
        this.setState({
            Topic:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.Username} ${this.state.Comments} ${this.state.Topic}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit} >
      <div>
        <div>
       <label>username</label>
       <input type= 'text' value={this.state.Username} onChange={this.handleUsernameChange}/>
       </div>
       <div>
        <label>Comments</label>
        <input type='text' value={this.state.Comments} onChange={this.handleCommentChange}/>
       </div>
       <div>
        <label>Topic</label>
        <select value={this.state.Topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="next.js">Next.js</option>
        </select>
       </div>
       <button type='Submit'>Submit</button>
      </div>
      </form>
    )
  }
}

export default Form
