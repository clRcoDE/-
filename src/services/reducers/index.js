

import {combineReducers} from 'redux'



import {data} from './data'
import {user} from './user'


const rootReducer =  combineReducers({
    dataReducer:data,
    userReducer:user
})

export default  rootReducer