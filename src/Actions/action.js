import {FETCH_TODOS } from "./types"

export const fetchData = (props) => {
  return (dispatch) => {
    props.setLoading(true);
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {dispatch({
        type: FETCH_TODOS, data
      }) ;props.setLoading(false)})
      .catch(console.log())
  }
}