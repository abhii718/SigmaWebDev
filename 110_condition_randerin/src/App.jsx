import { useState } from "react";
import "./App.css";

function App() {
  // State variables
  const [count, setCount] = useState(0); // State for count
  const [showbtn, setshowbtn] = useState(false); // State for showing/hiding button
  const [todos, settodos] = useState([ // State for todo items
    {
      title: "hey",
      desc: "I am good todo",
    },
    {
      title: "hey",
      desc: "I am good todo",
    },
    {
      title: "hey",
      desc: "I am good todo",
    },
  ]);

  // Todo component to display each todo item
  function Todo(todo) {
    return (
      <>
        <div className="todo">{todo.title} </div>
        <div className="todo">{todo.desc} </div>
      </>
    );
  }

  return (
    <>
      <div></div>
      {/* Conditional rendering of button based on showbtn state */}
      {showbtn ? (
        <button onClick={() => setshowbtn(!showbtn)}>Show Btn is true</button>
      ) : (
        <button>Show Btn is false</button>
      )}

      {/* Alternative conditional rendering of button */}
      {/* {showbtn && (
        <button onClick={() => setshowbtn(!showbtn)}>Show Btn is true</button>
      )} */}
      
      {/* Rendering todos using map function */}
      {todos.map((item, index) => (
        <Todo key={index} title={item.title} desc={item.desc} />
      ))}
      
      {/* Toggle button for showbtn state */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle show btn</button>
      </div>
      
      {/* Informational text */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
