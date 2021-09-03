import React from "react";
export default function Todo(props) {
    return(
        <li className="todo stack-small">
         <div className="c-cb">
           <input id={props.id} type="checkbox" defaultChecked={props.completed} />
           <label className="todo-label" htmlFor={props.id}>
             {props.name}
           </label>
         </div>
           <div className="btn-group">
             <button type="button" className="btn"
             onClick={() => alert("hi!")}
             >
               Edit<span className="visally-hidden">{props.name}</span>
             </button>
             <button type="button" className="btn btn__danger"
             onClick={() => alert("hi!")}
             >
               Delete
               <span className="visually-hidden">{props.name}</span>
             </button>
           </div>
       </li>
    );
}