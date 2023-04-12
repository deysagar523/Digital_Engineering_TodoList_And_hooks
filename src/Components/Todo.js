import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      currentId: "",
      currentValue: "",
      editing: false,
    };
  }
  onChangeTaskHandler = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };
  onAddTaskHandler = (event) => {
    const obj = {
      name: this.state.value,
      id: uuidv4(),
    };
    if (this.state.value !== "") {
      this.state.todos.push(obj);
      this.setState({ todos: this.state.todos });
      this.setState({ value: "" });
    }
  };
  OnEditTaskHandler = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentId: todo.id });
    this.setState({ currentValue: todo.name });
  };
  onEditChangeTaskHandler = (event) => {
    this.setState({ currentValue: event.target.value });
  };

  onEditSubmit = (event) => {
    this.setState({ editing: false });
    this.state.todos.map((todo) => {
      if (todo.id === this.state.currentId) {
        todo.name = this.state.currentValue;
      }
    });
  };
  onDeleteHandler = (ind) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(ind, 1);
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div
        class="card border-primary mb-3"
        style={{
          maxWidth: "18rem",
          textAlign: "center",
          alignItems: "center",
          margin: "5% auto",
        }}
      >
        {this.state.editing === false ? (
          <>
            <div
              class="card-header border-primary mb-3"
              style={{ width: "100%", backgroundColor: "#99ccff" }}
            >
              Add Task
            </div>
            <div class="card-body text-success">
              <input
                placeholder="New Task"
                value={this.state.value}
                onChange={this.onChangeTaskHandler}
              />

              <button
                style={{ backgroundColor: "#99ccff" }}
                onClick={this.onAddTaskHandler}
              >
                Add
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              class="card-header border-primary mb-3"
              style={{ width: "100%", backgroundColor: "#99ccff" }}
            >
              Update Task
            </div>
            <div class="card-body text-success">
              <input
                placeholder="Edit Task"
                value={this.state.currentValue}
                onChange={this.onEditChangeTaskHandler}
              />
              <button
                style={{ backgroundColor: "#99ccff" }}
                onClick={this.onEditSubmit}
              >
                Update
              </button>
            </div>
          </>
        )}

        {this.state.todos.map((todo, ind) => {
          return (
            <div class="card border-success mb-3" style={{ width: "80%" }}>
              <h5>{todo.name} </h5>
              <table className="table">
                <td>
                  <button
                    style={{
                      backgroundColor: "green",
                    }}
                    onClick={() => {
                      this.OnEditTaskHandler(todo);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => this.onDeleteHandler(ind)}
                  >
                    Delete
                  </button>
                </td>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Todo;
