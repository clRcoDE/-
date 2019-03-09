
import {
  REQUEST_BEGINS,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  SET_USER,
  GET_DEFAULT,
  POST_NEW_USER,
  SET_NAME,
  SET_DEFAULT_DATA,
  SET_VISIBILITY_FILTER,
  ADD_LIST_CATEGORY,
  DELETE_LIST_CATEGORY,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../types'

import { Alert } from 'react-native'





const requestBegins = () => (
  {
    type: REQUEST_BEGINS,
    loading: true
  }
)


const requestSuccess = () => (
  {
    type: REQUEST_SUCCESS,
    loading: false
  }
)

const requestFailed = () => (
  {
    type: REQUEST_FAILED,
    loading: false
  }
)



const getDefaultData = () => {
  return fetch(`http://10.0.2.2:3000/default`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(result => result)
    .catch(e => Alert.alert(`get default error ${e} `))
}


const postNewUser = (username, data) => {
  fetch(`http://10.0.2.2:3000/user`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: { "username": username, ...data }


  }).catch(e => Alert.alert(`post default error ${e}`))
}


const requestNewCategory = (categoryName, username) => {
  this.cacheData = null
  fetch(`http://10.0.2.2:3000/user/username=${username}/`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(result => { this.cacheData = result[0] })
    .catch(e => Alert.alert(`cache error ${e}`))


  this.cacheData = {
    ...this.cacheData,
    listCategories: [
      ...this.cacheData.listCategories,
      {
        title: `${categoryName}`,
        todos: []
      }
    ]
  }

 

//   http://localhost:3000/posts

// http://localhost:3000/posts/1/comments



}

const requestDeleteCategory = () => {
  fetch()
    .then()
    .then()
    .catch()
}

const requestChangeCategoryFilter = () => {
  fetch()
    .then()
    .then()
    .catch()
}

const requestAddNewTodo = () => {
  fetch()
    .then()
    .then()
    .catch()
}

const requestToggleTodo = () => {
  fetch()
    .then()
    .then()
    .catch()
}

const requestDeleteTodo = () => {
  fetch()
    .then()
    .then()
    .catch()
}



const setName = (username) => {
  return {
    type: SET_NAME,
    username
  }
}

const setInitialData = (data) => {
  return {
    type: SET_DEFAULT_DATA,
    data
  }
}


const deleteTodoDispatcher = (todoIndex) => (
  {
    type: DELETE_TODO,
    todoIndex
  }
)

const toggleTodoDispatcher = (todoIndex) => (
  {
    type: TOGGLE_TODO,
    todoIndex
  }
)

const addNewTodoDispatcher = (newTodo) => (

  {
    type: ADD_TODO,
    newTodo

  }
)

const changeCategoryFilterDispatcher = (filter) => (
  {
    type: SET_VISIBILITY_FILTER,
    filter
  }
)

const deleteCategoryDispatcher = (categoryIndex) => (
  {

    type: ADD_LIST_CATEGORY,
    categoryIndex
  }
)

const newCategoryDispatcher = (newCategory) => (
  {

    type: DELETE_LIST_CATEGORY,
    newCategory
  }
)

export const deleteTodo = async () => {
  return dispatch => {
    await requestDeleteTodo()
    dispatch(deleteTodoDispatcher())
  }
}

export const toggleTodo = async () => {
  return dispatch => {
    await requestToggleTodo()
    dispatch(toggleTodoDispatcher())
  }
}

export const addTodo = async () => {

  return dispatch => {
    await requestAddNewTodo()
    dispatch(addNewTodoDispatcher())
  }
}




export const setVisibilityFilter = async () => {

  return dispatch => {
    await requestChangeCategoryFilter()
    dispatch(changeCategoryFilterDispatcher())
  }

}


export const deleteCategoryList = async () => {
  return dispatch => {
    await requestDeleteCategory()
    dispatch(deleteCategoryDispatcher())
  }
}


export const addCategoryList = async (newCategoryName) => {
  return dispatch => {
    await requestNewCategory(newCategoryName)
    dispatch(newCategoryDispatcher())
  }


}

export const setUser = async (usernameInput) => {

  return dispatch => {
    const defaultData = await getDefaultData() // IO/network need to wait for it
    await postNewUser(usernameInput, defaultData) // IO/network 
    await dispatch(setName(usernameInput)) ///reducer
    await dispatch(setInitialData(defaultData)) ///reducer

  }
}





export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


