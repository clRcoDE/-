import {ADD_TODO,TOGGLE_TODO,DELETE_TODO} from '../types'


// const initialUser ={
        //     username:action.username,
        //     lists:[
        //         {
        //             title:'Today',
        //             #todos:[
        //                 {
        //                     text:'تخم مرغ بخر',
        //                     isCompleted:false,
        //                     color:'blue'
        //                 },
        //                 {
        //                     text:' به مربی پی ام بده ',
        //                     isCompleted:false,
        //                     color:'red'
        //                 },
        //             ]
        //         },
        //         {
        //             title:'Work',
        //             #todos:[
        //                 {
        //                     text:' جلسه ی ساعت 2 یادت نره ',
        //                     isCompleted:false,
        //                     color:'grey'
        //                 },
        //             ]
        //         },
        //     ]
        // } 



const todos =(state = {} , action )=>{
    switch(action.type){

        case ADD_TODO:
        const newLists = state.lists.map(list=>{ 
            if(list.title === action.listTitle){
                  return {...list , todos:[ ...list.todos , action.newTodo ] } 
            }else{
               return  list
            } 
        })

        
        return {...state , newLists }

        case TOGGLE_TODO:
        const newLists = state.lists.map(list=>{
            if(list.title === action.listTitle){
                 list.todos.map((todo , index) =>{
                        if(action.todoIndex === index){
                            return{
                                ...todo ,
                                isCompleted:!todo.isCompleted
                            }
                        }
                        else{
                            return todo
                        }

                        
                })
            }else{
                return list
            }
        })
        return {...state , newLists }
        case DELETE_TODO:
        return state
        default:
        return state
    }
}