function bindActionCreator(actionCreator, dispatch) {
  return (...args) => {
    dispatch(actionCreator(this, [...args]))
  }
}

export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    actionCreators = actionCreators()
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    return
  }
  
  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}

  return keys.reduce((ret, creator) => {
    ret[creator] = bindActionCreator(actionCreators[creator], dispatch)

    return ret
  }, boundActionCreators)
}