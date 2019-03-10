import {
    SET_DEFAULT_DATA,
    SET_VISIBILITY_FILTER,
    ADD_LIST_CATEGORY,
    DELETE_LIST_CATEGORY,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
} from '../types'

const initialState = {
    todoLists: []
}

export const data = (state = initialState, action) => {

    switch (action.type) {

        case SET_DEFAULT_DATA:
            return action.data


        case ADD_LIST_CATEGORY:
            return {
               
                todoLists: [
                    ...state.todoLists,
                    action.newList
                ]
            }


        case DELETE_LIST_CATEGORY:
            return {
                todoLists: [
                    ...state.todoLists.slice(0, action.listIndex),
                    ...state.todoLists.slice(action.listIndex + 1)
                ]
            }

        case ADD_TODO:
            return state.todoLists.map((item, index) => {
                if (item.title === action.listTitle) {
                    return {
                        ...item,
                        todos: [
                            ...item.todos,
                            action.newTodo
                        ]
                    }
                } else {
                    return item
                }
            })

        case DELETE_TODO:

            return state.todoLists.map((item, index) => {

                if (item.title === action.listTitle) {

                    return {
                        ...item,
                        todos: [
                            ...item.todos.slice(0, action.todoIndex),
                            ...item.todos.slice(action.todoIndex + 1)
                        ]
                    }

                } else {
                    return item
                }
            })

            

        case TOGGLE_TODO:
            return state.todoLists.map((item, index) => {

                if (item.title === action.listTitle) {
                    return {
                        ...item,
                        todos: [
                            ...item.todos.slice(0, action.todoIndex),
                            { ...item.todos[action.todoIndex], isCompleted: !item.todos[action.todoIndex].isCompleted },
                            ...item.todos.slice(action.todoIndex + 1)
                        ]
                    }
                } else {
                    return item
                }

            })


           


        case SET_VISIBILITY_FILTER:
            return state.todoLists.map((item, index) => {
                if (item.title === action.listTitle) {
                    return {
                        ...item,
                        filter: action.filter
                    }
                } else {
                    return item
                }
            })


        default:
            return state
    }

}