import "./App.css";
import logo from "./assets/logo.svg";
import smiley from "./assets/smiley.svg";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [open, setOpen] = useState(false);

  const displayModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <div onClick={() => displayModal()} className="homeWrapper">
          <section className="logoSection">
            <img src={logo} alt="logo" />
            <h2>A Todo App</h2>
          </section>
          <img className="smiley" src={smiley} alt="smiley" />
        </div>
      ) : (
        ""
      )}
      {open ? <TodoList /> : ""}
    </>
  );
}

export default App;
