import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import attractions from './attraction'
import conferences from './conference'
import education from './education'
import general from './general'
import music from './music'
import sports from './sports'
import tech from './tech'
import events from './events'

const reducer = combineReducers({
  user,
  attractions,
  conferences,
  education,
  general,
  music,
  sports,
  tech,
  events
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
