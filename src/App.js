import { useSelector, useDispatch } from 'react-redux/es/exports';

import './App.css';
import {fetchTodos} from './actions/action'

function App() {
  const todos = useSelector(state => state.todos) || {};
  const todoLoading = todos.Loading;
  const dispatch = useDispatch();

  const onFetchTodos = () => { 
    dispatch(fetchTodos(dispatch))
  }
  return (
    <div className="App">
      {todoLoading ? "" : <button onClick={() => onFetchTodos()} disabled={todoLoading}>Fetch Todos</button>}
      {todoLoading ? <div> <h4>Fetching Todos...</h4>
        <div className = 'loader-container'>
          <div className='spinner'></div>
        </div>
      </div> : <div>
        {todos.data.length!==0 && todos.data.map((todo) => 
          <ul key={todo.id}>
            <li>{todo.title}</li>
          </ul>)
        }
      </div>}
    </div>
  );
}

export default App;
