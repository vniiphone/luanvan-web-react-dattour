import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import {toast} from 'react-toastify';
import Color from "../HOC/Color";

class ListTodos extends React.Component {

  state = {
    ListTodos: [
      {
        id: 'toto1', title: 'Doign homworked'
      },
      {id: 'toto2', title: 'Doign Game'},
      {id: 'toto3', title: 'Missing Bug'}
    ],
    editTodo: {}
  }

  addNewTodo = (todo) => {
    // let currentTodo = this.state.ListTodos;
    // currentTodo.push(todo);
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
      // ListTodos: currentTodo
    })

    toast.success("Wow so easy!")
  }

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodos;
    // currentTodo.splice(index, 1);

    currentTodo = currentTodo.filter((item) => item.id !== todo.id)

    console.log('Checkk todo: ', todo)
    this.setState({
      ListTodos: currentTodo
    })

    toast.success(`Thành công`)
  }
  handleEditTodo = (todo) => {
    let {editTodo, ListTodos} = this.state;
    let isEmpty = Object.keys(editTodo).length === 0;

    //Khi btn Lưu
    if (isEmpty === false && editTodo.id === todo.id) {

      let ListTodoCopy = [...ListTodos];

      let objectIndex = ListTodoCopy.findIndex((obj => obj.id === todo.id));

      //Log object
      console.log('before update object: ', ListTodos[objectIndex]);

      //Update object
      ListTodoCopy[objectIndex].title = editTodo.title;
      this.setState({
        ListTodos: ListTodoCopy,
        editTodo: {}

      })
      toast.success(`Edit Todo Thành công`)
      return;
    }
    //khi btn Sửa


    this.setState({
      editTodo: todo
    })

  }

  handleOnchangeEditTodo = (event) => {

    let editTodoCopy = {...this.state.editTodo};
    editTodoCopy.title = event.target.value;


    this.setState({editTodo: editTodoCopy})
  }


  render() {
    let {ListTodos, editTodo} = this.state;

    let isEmpty = Object.keys(editTodo).length === 0
    console.log('Check empty object: ', isEmpty)
    return (
      <div className="list-todo-container">
        <AddTodo
          addNewTodo={this.addNewTodo} />
        <p>
          Simple Todos App
        </p>

        <div className="todo-list-content">
          {
            ListTodos && ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div div className="todo-child" key={item.id}>
                  {isEmpty === true ?
                    <span> {index + 1} - {item.title} </span>
                    :
                    <>
                      {
                        editTodo.id === item.id ?

                          <span >

                            {index + 1} - <input value={editTodo.title}
                              onChange={(event) => this.handleOnchangeEditTodo(event)} />
                          </span>
                          :
                          <span>
                            {index + 1} - {item.title}
                          </span>
                      }
                    </>

                  }

                  <button className="eidt" type="button"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmpty === false && editTodo.id === item.id ?
                      'Save' : 'Edit'}
                  </button>

                  <button className="delete" type="button"
                    onClick={() => this.handleDeleteTodo(item)}
                  >Delete</button>
                </div>
              )
            })
          }
        </div>
      </div >
    )

  }


}
export default Color(ListTodos);