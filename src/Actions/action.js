import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./types"

export const getTodosRequest = (data) => ({
  type: GET_TODOS_REQUEST,
  payload: data
})

export const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: data
})

export const getTodosFailure = (data) => ({
  type: GET_TODOS_FAILURE,
  payload: data
})

export const fetchTodos = (dispatch) => { 
  dispatch(getTodosRequest());
  return () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json()) 
      .then(data => dispatch(getTodosSuccess(data))) 
      .catch(err => dispatch(getTodosFailure(err))) 
  }
}