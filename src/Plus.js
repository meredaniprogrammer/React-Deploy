
import React from 'react'


class Plus extends React.Component{
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
        count: prevState.count + 4
      }
    })
  }
  render(){
    return(
      <div className = 'Count'>
        <div  className = 'count4'> 
        <h2>Count in 4s</h2>
        <h3>{this.state.count}</h3>
        <button onClick = {this.handleClick}>Count</button>
        </div>
      </div>
    )
  }
}





export default Plus