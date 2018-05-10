const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export const increase = () => ({
  type: INCREASE
})

export const decrease = () => ({
  type: DECREASE
})

export const asyncIncrease = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increase())
    }, 1000)
  }
}

const initialState = {
  count: 1
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREASE:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}