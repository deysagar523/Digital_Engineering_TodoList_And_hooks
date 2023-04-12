import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoFunc = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("Todos") == undefined
      ? []
      : JSON.parse(localStorage.getItem("Todos"))
  );
  const [val, setVal] = useState("");
  const [curVal, setCurVal] = useState("");
  const [edit, setEdit] = useState(false);
  const [curId, setCurId] = useState("");
  const onChangeTaskHandler = (event) => {
    event.preventDefault();
    setVal(event.target.value);
  };
  const onAddTaskHandler = (event) => {
    const obj = {
      name: val,
      id: uuidv4(),
      isCompleted: false,
    };
    if (val !== "") {
      var newTodos = todos;
      newTodos.push(obj);
      // setTodos((todos)=>[...todos,obj]);
      setTodos(newTodos);
      setVal("");
      localStorage.setItem("Todos", JSON.stringify(todos));
    }
  };
  const OnEditTaskHandler = (todo) => {
    setEdit(true);
    setCurId(todo.id);
    setCurVal(todo.name);
  };
  const onEditChangeTaskHandler = (event) => {
    setCurVal(event.target.value);
  };

  const onEditSubmit = (event) => {
    setEdit(false);
    todos.map((todo) => {
      if (todo.id === curId) {
        todo.name = curVal;
      }
    });
    localStorage.setItem("Todos", JSON.stringify(todos));
  };

  const onDeleteHandler = (ind) => {
    const newTodos = [...todos];
    newTodos.splice(ind, 1);
    setTodos(newTodos);
    //console.log(todos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  };

  const OnCompleteTaskHandler = (ind) => {
    const compTodo = [...todos];
    compTodo[ind].isCompleted = true;
    //console.log(compTodo);
    setTodos(compTodo);
    //console.log(todos);
    localStorage.setItem("Todos", JSON.stringify(todos));
  };

  return (
    <div
      class="card border-primary mb-3"
      style={{
        maxWidth: "28rem",
        textAlign: "center",
        alignItems: "center",
        margin: "5% auto",
      }}
    >
      {!edit && (
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
              value={val}
              onChange={onChangeTaskHandler}
            />

            <button
              style={{ backgroundColor: "#99ccff" }}
              onClick={onAddTaskHandler}
            >
              Add
            </button>
          </div>
        </>
      )}
      {edit && (
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
              value={curVal}
              onChange={onEditChangeTaskHandler}
            />
            <button
              style={{ backgroundColor: "#99ccff" }}
              onClick={onEditSubmit}
            >
              Update
            </button>
          </div>
        </>
      )}

      {todos.map((todo, ind) => {
        return (
          <div class="card border-success mb-3" style={{ width: "80%" }}>
            <h5>{todo.name} </h5>
            <table className="table">
              {todo.isCompleted && (
                <td>
                  <h6 style={{ fontSize: "25px" }}>Completed</h6>
                </td>
              )}
              {!todo.isCompleted && (
                <>
                  <td>
                    <button
                      style={{
                        backgroundColor: "#b3ffb3",
                      }}
                      onClick={() => {
                        OnEditTaskHandler(todo);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "#d9b3ff",
                      }}
                      onClick={() => {
                        OnCompleteTaskHandler(ind);
                      }}
                    >
                      Complete
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "red" }}
                      onClick={() => onDeleteHandler(ind)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default TodoFunc;
