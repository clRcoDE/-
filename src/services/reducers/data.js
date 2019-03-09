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
    listCategories: []
}

export const user = (state = initialState, action) => {

    switch (action.type) {

        case SET_DEFAULT_DATA:
            return action.data


        case ADD_LIST_CATEGORY:
            return {
                ...state,
                listCategories: [
                    ...state.listCategories,
                    action.newCategory
                ]
            }


        case DELETE_LIST_CATEGORY:
            return {
                ...state,
                listCategories: [
                    ...state.listCategories.slice(0, action.categoryIndex),
                    ...state.listCategories.slice(action.categoryIndex + 1)
                ]
            }

        case ADD_TODO:
            const newListCategoriesAdd = state.listCategories.map((item, index) => {
                if (item.title === action.categoryTitle) {
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
            return {
                ...state,
                newListCategoriesAdd
            }

        case DELETE_TODO:

            const newListCategoriesDel = state.listCategories.map((item, index) => {

                if (item.title === action.categoryTitle) {

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

            return {
                ...state,
                newListCategoriesDel
            }


        case TOGGLE_TODO:
            const newListCategoriesTog = state.listCategories.map((item, index) => {

                if (item.title === action.categoryTitle) {
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


            return {
                ...state,
                newListCategoriesTog
            }


        case SET_VISIBILITY_FILTER:
            const newListCategoriesFilter = state.listCategories.map((item, index) => {
                if (item.title === action.categoryTitle) {
                    return {
                        ...item,
                        filter: action.filter
                    }
                } else {
                    return item
                }
            })

            return {
                ...state,
                newListCategoriesFilter
            }

        default:
            return state
    }

}