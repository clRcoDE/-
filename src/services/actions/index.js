
import {
  SET_NAME,
  SET_DEFAULT_DATA,
  SET_VISIBILITY_FILTER,
  ADD_LIST_CATEGORY,
  DELETE_LIST_CATEGORY,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../types'

// import { Alert } from 'react-native'


//**********************************************  ALL AVAILABLE FILTERS  ************************************************** */


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}






// const requestBegins = () => (
//   {
//     type: REQUEST_BEGINS,
//     loading: true
//   }
// )


// const requestSuccess = () => (
//   {
//     type: REQUEST_SUCCESS,
//     loading: false
//   }
// )

// const requestFailed = () => (
//   {
//     type: REQUEST_FAILED,
//     loading: false
//   }
// )

//***************************************  RESTful [ REQUEST / RESPONSE ] handlers  ***************************************/


// const getdefaultLists = () => {
//   return fetch(`http://10.0.2.2:3000/default`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       }
//     })
//     .then(result => result)
//     .catch(e => Alert.alert(`get default error ${e} `))
// }


// const postNewUser = (username, data) => {
//   fetch(`http://10.0.2.2:3000/user`, {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: { "username": username, ...data }


//   }).catch(e => Alert.alert(`post default error ${e}`))
// }


// const requestNewCategory = (categoryName, username) => {
//   this.cacheData = null
//   fetch(`http://10.0.2.2:3000/user/username=${username}/`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       }
//     })
//     .then(result => { this.cacheData = result[0] })
//     .catch(e => Alert.alert(`cache error ${e}`))


//   this.cacheData = {
//     ...this.cacheData,
//     listCategories: [
//       ...this.cacheData.listCategories,
//       {
//         title: `${categoryName}`,
//         #todos: []
//       }
//     ]
//   }

 

//   http://localhost:3000/posts

// http://localhost:3000/posts/1/comments



// }

// const requestDeleteCategory = () => {
//   fetch()
//     .then()
//     .then()
//     .catch()
// }

// const requestChangeCategoryFilter = () => {
//   fetch()
//     .then()
//     .then()
//     .catch()
// }

// const requestAddNewTodo = () => {
//   fetch()
//     .then()
//     .then()
//     .catch()
// }

// const requestToggleTodo = () => {
//   fetch()
//     .then()
//     .then()
//     .catch()
// }

// const requestDeleteTodo = () => {
//   fetch()
//     .then()
//     .then()
//     .catch()
// }




//**********************************************    ACTION CREATORS    ********************************************** */



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


const deleteTodoDispatcher = (listTitle,todoIndex) => (
  {
    type: DELETE_TODO,
    listTitle,
    todoIndex
  }
)

const toggleTodoDispatcher = (listTitle,todoIndex) => (
  {
    type: TOGGLE_TODO,
    listTitle,
    todoIndex
  }
)

const addNewTodoDispatcher = (listTitle,newTodo,lastItem) => (

  {
    type: ADD_TODO,
    listTitle,
    newTodo,
    lastItem

  }
)

const changeCategoryFilterDispatcher = (listTitle,filter) => (
  {
    type: SET_VISIBILITY_FILTER,
    listTitle,
    filter

  }
)

const deleteCategoryDispatcher = (listIndex) => (
  {

    type: DELETE_LIST_CATEGORY,
    listIndex
  }
)

const newCategoryDispatcher = (newList) => (
  {

    type:ADD_LIST_CATEGORY ,
    newList
  }
)




//******************************************  THUNKS ( do asynchronous tasks )   *********************************************/


export const deleteTodo = async () => {
  return dispatch => {
    // await requestDeleteTodo()
    dispatch(deleteTodoDispatcher())
  }
}

export const toggleTodo = async () => {
  return dispatch => {
    // await requestToggleTodo()
    dispatch(toggleTodoDispatcher())
  }
}

export const addTodo =  (listTitle,newTodo,lastItem) => {

  return dispatch => {
    // await requestAddNewTodo()
    dispatch(addNewTodoDispatcher(listTitle,newTodo,lastItem))
  }
}




export const setVisibilityFilter = async () => {

  return dispatch => {
    // await requestChangeCategoryFilter()
    dispatch(changeCategoryFilterDispatcher())
  }

}


export const deleteCategoryList = async () => {
  return dispatch => {
    // await requestDeleteCategory()
    dispatch(deleteCategoryDispatcher())
  }
}


export const addCategoryList =  (newList) => {
  return dispatch => {
    // await requestNewCategory(newCategoryName)
    dispatch(newCategoryDispatcher(newList))
  }


}

//*************************************************  FIRST THUNK    ******************************************************/


export const setUser = (usernameInput) => {

  return dispatch => {


    // const defaultLists = await getdefaultLists() // IO/network need to wait for it
    // await postNewUser(usernameInput, defaultLists) // IO/network 

const defaultLists =[
  
  
    
   
    {
      title:"امروز",
      filter:VisibilityFilters.SHOW_ALL,
      id:1,
      todos:[
        {
          title:'take the children',
          isCompleted:false,
          id:1
        },
        {
          title:'frie bakens',
          isCompleted:false,
          id:2
        }
      ]
    },
    {
      title:"فردا",
      filter:VisibilityFilters.SHOW_COMPLETED,
      id:2,
      todos:[
        {
          title:'buy milks',
          isCompleted:false,
          id:1

        },
        {
          title:'go to gym',
          isCompleted:true,
          id:2
        }
      ]
    },
    {
      title:"خونه",
      filter:VisibilityFilters.SHOW_ALL,
      id:3,
      todos:[
        {
          title:'take the children',
          isCompleted:false,
          id:1
        },
        {
          title:'frie bakens',
          isCompleted:false,
          id:2
        }
      ]
    },
    {
      title:"کاری",
      filter:VisibilityFilters.SHOW_COMPLETED,
      id:4,
      todos:[
        {
          title:'buy milks',
          isCompleted:false,
          id:1

        },
        {
          title:'go to gym',
          isCompleted:true,
          id:2
        }
      ]
    },
    
  ]

     dispatch(setName(usernameInput)) ///reducer
     dispatch(setInitialData(defaultLists)) ///reducer

  }
}







