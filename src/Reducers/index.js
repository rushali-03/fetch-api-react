import todos from './fetchTodosReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({todos})

export default allReducers;