import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'

import rootReducer from './Reducers/index'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
