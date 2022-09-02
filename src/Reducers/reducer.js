import { FETCH_TODOS } from "../Actions/types";

const reducer = (state = [], action) => {
  switch(action.type){
    case FETCH_TODOS:
      return [...state, ...action.data];
    default:
      return state;
  }
}
export default reducer;