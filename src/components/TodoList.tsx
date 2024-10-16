import { Todo } from "../types/todo";
import smallLogo from "../assets/smallLogo.svg";
import bin from "../assets/bin.svg";
// import { todos } from "../types/todoList";
import plus from "../assets/plus.svg";
import { useState } from "react";
const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  const storage: string | null = localStorage.getItem("todoList");
  const todos: Todo[] | null = storage ? JSON.parse(storage) : [];

  const setIsDone = (todo: Todo) => {
    const todoList: Todo[] = todos ? [...todos] : [];
    const filteredArray = todoList.filter((f) => f === todo);
    const newTodo: Todo = {
      text: todo.text,
      isDone: true,
    };
    filteredArray.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(filteredArray));
  };
  const removeFromList = (todo: Todo) => {
    const todoList: Todo[] = todos ? [...todos] : [];
    const filteredArray = todoList.filter((f) => f === todo);
    localStorage.setItem("todoList", JSON.stringify(filteredArray));
  };
  const TodoContainer = (todo: Todo) => {
    return (
      <div className={`todoContainer ${todo.isDone ? "isDone" : ""}`}>
        <div>
          <input
            checked={todo.isDone ? true : false}
            onClick={() => setIsDone(todo)}
            type="checkbox"
          />
          <p>{todo.text}</p>
        </div>
        <img onClick={() => removeFromList(todo)} src={bin} alt="bin" />
      </div>
    );
  };

  const addToList = () => {
    const todoList: Todo[] = todos ? [...todos] : [];
    const newTodo: Todo = {
      text: newTask,
      isDone: false,
    };
    todoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setNewTask("");
  };
  return (
    <div className="todoListWrapper">
      <div className="todoListSection">
        <header className="header">
          <img src={smallLogo} alt="logo" />
        </header>

        {todos
          ? todos.map((todo, i) => <TodoContainer key={i} {...todo} />)
          : ""}
      </div>
      <footer>
        <input
          type="text"
          placeholder="Add a new task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            addToList();
          }}
        >
          <p>
            <img src={plus} alt="add" />
          </p>
        </button>
      </footer>
    </div>
  );
};

export default TodoList;
