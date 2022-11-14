import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/ikons/close'
import {pen_1} from 'react-icons-kit/ikons/pen_1'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon icon={pen_1}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={close}/></span>
                </>
              )}
        </div>
    </div>
  ))
}
