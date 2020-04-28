
import React from 'react'


class Main extends React.Component{
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
        <div  className = 'count2'> 
        <h2>Count in 2s</h2>
        <h3>{this.state.count}</h3>
        <button onClick = {this.handleClick}>Count</button>
        </div>
      </div>
    )
  }
}





export default Main