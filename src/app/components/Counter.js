import React, {Component} from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../store'


import { Button } from 'antd'
//
// const Button = (props) => {
//   return (
//     <button {...props}>
//       {props.children}
//     </button>
//   )
// }

class Counter extends Component {
  increment = () => {
    const {dispatch} = this.props
    dispatch(incrementCount())
  }

  decrement = () => {
    const {dispatch} = this.props
    dispatch(decrementCount())
  }

  reset = () => {
    const {dispatch} = this.props
    dispatch(resetCount())
  }

  render () {
    const { count } = this.props
    console.log('Counter', count);
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <Button type='danger' style={{margin: '5px'}}  onClick={this.decrement}>-1</Button>
        <Button type='primary' style={{margin: '5px'}}  onClick={this.increment}>+1</Button>
        <Button type='info' style={{margin: '5px'}}  onClick={this.reset}>Reset</Button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {count} = state
  return {count}
}

export default connect(mapStateToProps)(Counter)
