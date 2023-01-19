import React from "react";
import Header from "./Header";
import React, { useState } from "react";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <header />
      <nav/>
      <main />
      <footer />

    </>
  );
}


export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Go shopping", done: true },
    { id: 2, task: "Wash dishes", done: false },
  ]);

  return (
    <TaskList tasks={tasks} />
  )
}

export default App;
