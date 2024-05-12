import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const {onDel, onDoneTodo, onImpTodo, important,done, title, id}= this.props
    
    let clazz = "";
    if (important) {
      clazz += " imp";
    }
    
    if (done) {
      clazz += " done";
    }
    return (
      <span className="d-flex align-items-center">
        <span
          className={`flex-grow-1  ${clazz} `}
          onClick={() =>onDoneTodo(id)}
        >
          {title}
        </span>
        <button
          className="btn btn-outline-danger"
          onClick={() => onDel(id)}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => onImpTodo(id)}
        >
          <i className="bi bi-exclamation-diamond"></i>
        </button>
      </span>
    );
  }
}
