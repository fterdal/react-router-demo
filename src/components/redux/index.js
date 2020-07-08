import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// ACTION TYPES
const SET_PETS = 'SET_PETS';

// ACTION CREATOR
export function setPets(pets) {
  return {
    type: SET_PETS,
    pets
  }
}

// REDUCER
const initialState = []
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PETS:
      return action.pets
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(logger))

export default store
