import React from 'react'
import './App.css'
import { connect } from './mini-react-redux'
import { increase, decrease,asyncIncrease } from './reducer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <h2>count form mini redux -> {this.props.count}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.props.increase()}>+</button>
        <button onClick={() => this.props.decrease()}>-</button>
        <button onClick={() => this.props.asyncIncrease()}>async</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = () => ({
  increase,
  decrease,
  asyncIncrease
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
