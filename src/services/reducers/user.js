
import {
    SET_NAME,
} from '../types'


const initialUser ={
    username:null
}


export const  user = ( state = initialUser , action ) =>{

    switch ( action.type ){
        case SET_NAME:
        return{
            username:action.username
        }
        default:
        return state
    }

}
