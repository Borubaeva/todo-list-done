import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/appHeader/AppHeader";
import SearchTodo from "./components/searchTodo/SearchTodo";
import TodoAdd from "./components/todoAdd/TodoAdd";
import TodoList from "./components/todoList/TodoList";

export default class App extends Component {
  state = {
    todoData: [
      { title: "Learn React", id: 1, done: false, important: false },
      { title: "Learn Redux", id: 2, done: false, important: false },
      { title: "Learn Typescript", id: 3, done: false, important: false },
      { title: "Learn Angular", id: 4, done: false, important: false },
    ],
    status: 'all'
  };

  delTodo = (id) => {
    const newTodoData = this.state.todoData.filter((el) => el.id !== id);
    this.setState({ todoData: newTodoData });
  };
  
  addTodo = (text) => {
    const ids = this.state.todoData.map((el) => el.id);
    const newTodo = {
      title: text,
      done: false,
      iportant: false,
      id: ids.at(-1) + 1 ||1,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo] });
  };
  importantTodo = (id) => {
    console.log(id);
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const todo = this.state.todoData[index];
    const upTodo = { ...todo, important: !todo.important };
    console.log(upTodo);
    this.setState({ todoData: [...before, upTodo, ...after] });
  };

  doneTodo = (id) => {
    console.log(id);
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const todo = this.state.todoData[index];
    const updTodo = { ...todo, done: !todo.done};
    console.log(updTodo);
    this.setState({ todoData: [...before, updTodo, ...after] });
   
  };

  // activeTodo=(id)=>{
  //   console.log(id);

  //   let filteredTodos = this.state.todoData;

  //   if (this.state.filter === 'active') {
  //     filteredTodos = this.state.todoData.filter(todo => !todo.done);
  //   } else if (this.state.filter === 'done') {
  //     filteredTodos = this.state.todoData.filter(todo => todo.done);
  //   }
  
  //   const done = this.state.todoData.filter(el => el.done).length;
  //   const active = this.state.todoData.length - done;
  // }

  searchData=(id)=>{
    console.log(id);
    if(this.id===!id){
      const filterSearch=this.state.todoData.filter((el) => el.important);
      this.setState({todoData:filterSearch})
    }
  }

  filter=(array, status)=>{
    switch(status){
      case 'all':
        return array
      case 'active':
        return array.filter(el=>!el.done)
      case 'done':
        return array.filter(el=>el.done)
      default:
        return array
    }
  }
  render() {

    const done=this.state.todoData.filter((el)=> el.done).length
    const active=this.state.todoData.length-done

    const todos=this.filter(this.state.todoData, this.state.status )
    return (

      <div style={{ width: "500px", margin: "0 auto" }}>
        <AppHeader done={done} active={active} />
        <SearchTodo onSetStatus />
        <TodoList
          todos={this.state.todoData}
          ondelTodo={this.delTodo}
          onImpTodo={this.importantTodo}
          onDoneTodo={this.doneTodo}
        />
        <TodoAdd onAddTodo={this.addTodo} />
      </div>
    );
  }
}

//State saktait maalymat
// setState ozgortot state


// 