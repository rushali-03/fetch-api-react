import {GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../actions/types"

const initialState = {
  Loading:  false,
  data: [],
  error: null
}

const fetchTodosReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_TODOS_REQUEST:
      return{
        ...state,
        Loading: true,
        data: null,
        error: null
      }
    case GET_TODOS_SUCCESS:
      return{
        ...state,
        Loading: false,
        data: action.payload,
        error: null
      }
    case GET_TODOS_FAILURE:
      return{
        ...state,
        Loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export default fetchTodosReducer;










// import { FETCH_TODOS } from "../actions/types";

// const initialState = {
//   //2 keys
// }

// const fetchTodosReducer = (state = [], action) => { //make 3 cases fetchtodos req, success, failure. make initial state obj. (obj has 2 keys 1. todos = [], 2. loading todos = false)
//   switch(action.type){
//     case FETCH_TODOS:
//       return [...state, ...action.data];
//     default:
//       return state;
//   }
// }
// export default fetchTodosReducer;

// import { SET_TODOS_LOADING } from "../actions/types";

// const loadingTodosReducer = (state = false, action) => {
//   switch(action.type){
//     case SET_TODOS_LOADING:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// export default loadingTodosReducer;