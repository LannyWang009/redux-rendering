// ============================
// util
const deepCopy = (x) => JSON.parse(JSON.stringify(x))

// ==========================
// Create Redux Store

const { createStore } = Redux
// Initialize the Redux store by passing it to our reducer
const { subscribe, dispatch, getState } = createStore(reducer)

// pass the redux state to our render mehtod
subscribe(() => render(getState().toJS()))

// // Here we're making a call to dispatch() - this triggers the first render.
// dispatch({ type: null })

// ========================
// DOM EVENT
// const addCircleButton = document.getElementById('addCircle')
// addCircleButton.addEventListener('click', addEvents)

// Write DOM event listeners here, make them dispatch actions to the Redux store
const addEvents = () => {
  // Dispatch the "ADDCIRCLE" action every time the body is clicked
  const addCircleButton = document.getElementById('addCircle')
  addCircleButton.addEventListener('click', e => {
    dispatch(
      { type: 'ADDCIRCLE', radius: Math.floor((Math.random() * 100) + 10), color: Math.floor(Math.random() * 16777215).toString(16) }
    )
  })
}

addEvents()
