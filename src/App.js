import React,{ useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const [tasks,setTasks] = useState(props.tasks)
  function addTask(name) {
    alert(name);
  }
  const taskList = props.tasks.map(task => (
    <Todo id={task.idt}
    name={task.name}
    completed={task.completed}
    key={task.id}
    />
  ));
  return (
    <div className="toodoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
     <h2 id="list-heading">
       3 tasks remainning
     </h2>
     <ul
      role="list"
      className="todo-list stack-large stack-exceptoon"
      aria-labelledby="list-heading"
     >
       {taskList}
       </ul>
    </div>
  );
}

export default App;
