import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export const localStorageKey = "reduxState"

const middlewares = [thunk]

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, {}, composedEnhancers)

export default store
