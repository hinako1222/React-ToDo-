import './App.css';

function App(props) {
  return (
    <div className="toodoapp stack-large">
      <h1>TodoMatic</h1>
      <from>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
          </h2>
          <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
      </from>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show</span>
          <span>all</span>
          <span className="visually-hidden">tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Active</span>
          <span className="visually-hidden">tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">
            Show
          </span>
          <span>Completed</span>
          <span className="visually-hidden">tasks</span>
        </button>
      </div>
     <h2 id="list-heading">
       3 tasks remainning
     </h2>
     <ul
     role="list"
     className="todo-list stack-large stack-exception"
     aria-labelledby="list-heading">
       <li className="todo stack-small">
         <div className="c-cb">
           <input id="todo-0" type="checkbox" defaultChecked={true}/>
           <label className="todo-label" htmlFor="todo-0">
             Eat
           </label>
         </div>
           <div className="btn-group">
             <button type="button" className="btn">
               Edit<span className="visally-hidden">Eat</span>
             </button>
             <button type="button" className="btn btn__danger">
               Delete
               <span className="visually-hidden">Eat</span>
             </button>
           </div>
       </li>
       <li className="todo stack-small">
         <div className="c-cb">
           <input id="todo-1" type="checkbox" defaultChecked={true}/>
           <label className="todo-label" htmlFor="todo-1">
             Sleep
           </label>
         </div>
           <div className="btn-group">
             <button type="button" className="btn">
               Edit<span className="visally-hidden">Sleep</span>
             </button>
             <button type="button" className="btn btn__danger">
               Delete
               <span className="visually-hidden">Eat</span>
             </button>
           </div>
       </li>
       <li className="todo stack-small">
         <div className="c-cb">
           <input id="todo-2" type="checkbox" defaultChecked={true}/>
           <label className="todo-label" htmlFor="todo-2">
             Repeat
           </label>
         </div>
           <div className="btn-group">
             <button type="button" className="btn">
               Edit<span className="visally-hidden">Sleep</span>
             </button>
             <button type="button" className="btn btn__danger">
               Delete
               <span className="visually-hidden">Eat</span>
             </button>
           </div>
       </li>
       </ul>
    </div>
  );
}

export default App;
