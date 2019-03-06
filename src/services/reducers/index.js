



import {combineReducers} from 'redux'

import todos from './todos'
import lists from './lists'
import visibilityFilter from './visibilityFilter'
export default  combineReducers({
    todos,
    lists,
    visibilityFilter
})