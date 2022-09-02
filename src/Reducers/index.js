import todos from './reducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({todos})

export default allReducers;