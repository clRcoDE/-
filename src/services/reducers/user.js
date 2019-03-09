
import {
    SET_NAME,
} from '../types'


const user ={
    name:null
}


export const data =( state = user , action )=>{

    switch ( action.type ){
        case SET_NAME:
        return{
            name:action.username
        }
        default:
        return state
    }

}
