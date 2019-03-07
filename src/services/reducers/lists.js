// const initialUser ={
//     username:'',
//     lists:[
//         {
//             title:'',
//             tod.os:[
//                 {
//                     text:'',
//                     isCompleted:false,
//                     color:''
//                 },
//                 {
//                     text:'',
//                     isCompleted:false,
//                     color:''
//                 },
//             ]
//         }
//     ]
// } 



import { ADD_USER , GET_USER_DATA ,  ADD_LIST , DELETE_LIST } from '../types'

const lists =(state = {} , action )=>{

    switch(action.type){
        case ADD_USER:
        return {
            username:action.username,
            lists:[
                {
                    title:'Today',
                    todos:[
                        {
                            text:'تخم مرغ بخر',
                            isCompleted:false,
                            color:'blue'
                        },
                        {
                            text:' به مربی پی ام بده ',
                            isCompleted:false,
                            color:'red'
                        },
                    ]
                },
                {
                    title:'Work',
                    todos:[
                        {
                            text:' جلسه ی ساعت 2 یادت نره ',
                            isCompleted:false,
                            color:'grey'
                        },
                    ]
                },
            ]
        }
        case GET_USER_DATA:
        return action.data  
        case ADD_LIST:
        return{
            ...state,
            lists:[
                ...state.lists,
                {
                    title:action.listName,
                    todos:[]
                }
            ]
        }
        case DELETE_LIST:
        return {
            ...state ,
             lists:[
                 ...state.lists.slice(0,action.listId),
                 ...state.lists.slice(action.listId+1)
             ]
        }
        default:
        return state
    }
}
