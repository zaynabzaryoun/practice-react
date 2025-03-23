// import { act, useReducer, useState } from 'react';
// // import AddTask from './AddTask.js';
// // import TaskList from './TaskList.js';


// function AddTask({ onAddTask }) {
//     const [text, setText] = useState("")
//     return (
//         <>
//             <input placeholder='add task' value={text} onChange={e => setText(e.target.value)} />

//             <button onClick={() => {
//                 setText("")
//                 onAddTask(text)
//             }}>
//                 add
//             </button>
//         </>
//     )
// }


// function TaskList({
//     tasks, onChangeTask, onDeleteTask
// }) {
//     return (
//         <ul>
//             {tasks.map(task => (
//                 <li key={task.id}>
//                     <Task
//                         task={task}
//                         onChange={onChangeTask}
//                         onDeleteTask={onDeleteTask}
//                     />
//                 </li>
//             ))}
//         </ul>
//     )
// }

// function Task({ task, onChange, onDelete }) {
//     const [isEdititng, setIsEditing] = useState(false)
//     let taskContent;
//     if (isEdititng) {
//         taskContent = (
//             <>
//                 <input
//                     value={task.text}
//                     onChange={e => {
//                         onChange({
//                             ...task,
//                             text: e.target.value
//                         })
//                     }}
//                 />
//                 <button onClick={()=> setIsEditing(fasle)}>save</button>
//             </>
//         )
//     } else {
//         taskContent = (
//             <>
//                 {task.text}
//                 <button onClick={()=> setIsEditing(true)}>edit</button>
//             </>
//         )
//     }
//     return (
//         <label>
//             <input type='checkbox' checked={task.done} onChange={e => {
//                 onChange({
//                     ...task,
//                     done: e.target.value
//                 })
//             }}
//             />
//             {taskContent}
//             <button onClick={() => onDelete(task.id)}>delete</button>
//         </label>
//     )
// }

// export default function TaskApp() {
//     const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

//     function handleAddTask(text) {
//         dispatch({
//             type: "added",
//             id: nextId++,
//             text: text
//         })
//     }

//     function handleChangeTask(task) {
//         dispatch({
//             type: "changed",
//             task: task
//         })
//     }

//     function handleDeleteTask(taskId) {
//         dispatch({
//             type: "delete",
//             id: taskId
//         })
//     }
//     return (
//         <>
//             <h1>Day off in Kyoto</h1>
//             <AddTask onAddTask={handleAddTask} />
//             <TaskList
//                 tasks={tasks}
//                 onChangeTask={handleChangeTask}
//                 onDeleteTask={handleDeleteTask}
//             />
//         </>
//     )
// }

// function tasksReducer(tasks, action) {
//     switch (action.type) {
//         case "added": {
//             return [...tasks, {
//                 id: action.id,
//                 text: action.text,
//                 done: false
//             }]
//         }
            
//         case "changed": {
//             return tasks.map(t => {
//                 if (t.id === action.task.id) {
//                     return action.task;
//                 } else {
//                     return t;
//                 }
//             })
//         }
//         case "delete": {
//             return tasks.filter(t => t.id !== action.id);

//         }
//         default: {
//             throw Error("unknown action: " + action.tyoe)
//         }
//     }
// }


// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];


import { useReducer, useState } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

function taskReducer(state, action) {
    if (action.type === "added") {
        return [
            ...task,
            {
                id: action.id,
                text: action.text,
                done: false,
            }
        ]
     
    } else if (action.type === "changed") {
        return tasks.map((t) => {
            if (t.id === action.task.id) {
                return action.task
            } else {
                return t
            }
        })
    } else if (action.type === "deleted") {
        return tasks.filter(t => t.id !== action.task.id)
    } else {
        throw Error("unknow action: " + action.tyoe)
    }
}

export default function TaskApp() {
    //   const [tasks, setTasks] = useState(initialTasks);
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  function handleAddTask(text) {
      dispatch({
          type: "added",
          id: nextId++,
          text: text
    })
  }

  function handleChangeTask(task) {
      dispatch({
          type: "changed",
          text: tast
    })
  }

  function handleDeleteTask(taskId) {
      // setTasks(tasks.filter((t) => t.id !== taskId));
      dispatch({
          type: "deleted",
          id: taskId
      })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}



let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
