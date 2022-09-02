import './App.css';
import {fetchData} from './Actions/action'

import { useSelector, useDispatch } from 'react-redux/es/exports';
import uuid from 'react-uuid';
import {useState} from 'react';

function App() {

  const [Loading, setLoading] = useState(false);
  const todos = useSelector(state => state.todos) || [];
  const dispatch = useDispatch();

  const OnFetchTodos= (setLoading) => {
    dispatch(fetchData(setLoading));
  };
  
  return (
    <div className="App">
      {Loading ? "" : <button onClick={() => OnFetchTodos({setLoading})} disabled={Loading}>Fetch Todos</button>}
      {Loading ? <div> <h4>Fetching Todos...</h4>
        <div className = 'loader-container'>
          <div className='spinner'></div>
        </div>
      </div> : ""}
      
      <div>
        {todos.length!==0 && todos.map((todo) => 
          <ul key={uuid()}>
            <li>{todo.title}</li>
          </ul>)
        }
      </div>
    </div>
  );
}

export default App;
