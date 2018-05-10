import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, thunk } from './mini-redux'
import { reducer } from './reducer'
import { Provider } from './mini-react-redux'
import { logger } from 'redux-logger'
// import thunk from 'redux-thunk'

// const log = logger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger
  )
)

// console.log(store.getState())

// const listener = () => {
//   console.log('from listener: currentState -> ', store.getState())
// }

// store.subscribe(listener)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

// function fn(fun) {
//   return (...args) => {
//     fun.apply(this, [...args])
//   }
// }

// function fun(a,b) {
//   console.log(a + b)
// }

// fn(fun)(2,3)
