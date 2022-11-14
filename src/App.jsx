import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center title">TODO-LIST APP</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <div>
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>Delete All</button>
        </div>
      )}
    </div>
  );
}

export default App;
