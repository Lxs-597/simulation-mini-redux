export default function createStore(reducer, enhancer) {
  if(typeof enhancer !== 'undefined') {
    if(typeof enhancer !== 'function') {
      throw new Error('enhancer must be a function')
    }

    return enhancer(createStore)(reducer)
  }

  let currentState = undefined
  let currentListeners = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    currentListeners.push(listener)
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())

    return action
  }

  dispatch({ type: '@SIMULATION-SIMPLE-REDUX' })

  return {
    getState,
    subscribe,
    dispatch
  }
}