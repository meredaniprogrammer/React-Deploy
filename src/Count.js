

import React from 'react'


class Count extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 2
      }
    })
  }
  render(){
    return(
      <div className = 'Count'>
        <div  className = 'count3'> 
        <h2>Count in 3s</h2>
        <h3>{this.state.count}</h3>
        <button onClick = {this.handleClick}>Count</button>
        </div>
      </div>
    )
  }
}





export default Count