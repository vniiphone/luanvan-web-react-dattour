import React from "react";
import './ListTodo.scss';
import {toast} from 'react-toastify';


class AddTodo extends React.Component {

  state = {
    title: ''
  }
  handleOnClickAddTodo = () => {

    if (!this.state.title) {
      toast.error(`Missing title`);
      return;
    }


    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title
    }

    this.props.addNewTodo(todo); // Gọi addNewTodo từ ListTodo
    // this.state.handleOnClickAddTodo(todo);

    this.setState({title: ''});
  }

  handleOnChangeTitle = (event) => {

    this.setState({title: event.target.value});
  }

  render() {
    let {title} = this.state;
    return (
      <>
        <div className="add-todo">
          <input className="add" value={title}
            type="text"
            onChange={(event) => this.handleOnChangeTitle(event)} />
          <button type="button"
            className="btn btn-primary"
            onClick={() => this.handleOnClickAddTodo()}

          >Add</button>
        </div>
      </>
    )
  }
}

export default AddTodo;