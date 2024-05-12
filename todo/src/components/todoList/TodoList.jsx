import React from 'react';
import TodoListItem from '../todoListItem/TodoListItem';

const TodoList = (props) => {
  console.log(props.todos);
  if(props.todos.length===0){
    return <h2>No data</h2>
  } 

  return (
    <ul className='list-group'>
      {props.todos.map((el) => (
        <li className='list-group-item' key={el.id}>
          <TodoListItem 
          // title={el.title} 
          // id={el.id}
          // important={el.important}
          // done={el.done}
          {...el}
          onDel={props.ondelTodo}
          onImpTodo={props.onImpTodo}
          onDoneTodo={props.onDoneTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

