import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");

  async function deleteTodo(id) {
    try {
      const res = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getTodos() {
    const res = await fetch("/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {description};

      const response = await fetch("/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
      setTodos([...todos, body])

    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getTodos();
  }, []);


  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <input
        type="text"
        placeholder="add todo"
        className="form-control"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <button className="btn btn-success" onClick={onSubmitForm}>Add</button>
      <table class="table mt-5">
        <thead>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

        {todos.map((todo) => (
          <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>
              <EditTodo todo={todo}/>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.todo_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
