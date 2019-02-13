const initialState = Immutable.fromJS([
  {
    radius: 50,
    color: '#FF00FF'
  },
  {
    radius: 30,
    color: '#FF99AA'
  },
  {
    radius: 60,
    color: '#0000FF'
  },
  {
    radius: 10,
    color: '#000000'
  }
])

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  // an error message in case the assertion is false
  console.assert(Immutable.isImmutable(state), 'Redux store should be an immutable value')
  let newState
  const { type } = action
  if (type === 'ADDCIRCLE') {
    console.log('action', action)
    var newCircle = {
      radius: action.radius,
      color: '#' + action.color
    }

    newState = Immutable.set(state, state.toJS().length, newCircle)
    console.log('new', newState.toJS())
  }

  return newState
}
