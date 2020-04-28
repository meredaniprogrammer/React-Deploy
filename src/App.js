
import React from 'react'
import Header from './Header'
import Main from './Main'
import Count from './Count'
import Plus from './Plus'

class App extends React.Component{
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
        count: prevState.count + 1
      }
    })
  }
  render(){
    return(
      <div>
        <Header />

        <div  className = 'count1'> 
        <h2>Count in 1s</h2>
        <h3>{this.state.count}</h3>
        <button onClick = {this.handleClick}>Count</button>
        </div>
        <Main />
        <Count />
        <Plus />
      </div>
    )
  }
}





export default App