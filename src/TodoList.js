
import React,{useState} from 'react';

const TodoList=()=>{
    const[inputTask,setInputTask]=useState('');
    const[list,setList]=useState([]);
    const [selectedDate, setSelectedDate] = useState(''); // Initialize selectedDate state
  const [selectedTime, setSelectedTime] = useState(''); // Initialize selectedTime state
    const handleAddTodo=()=>{
        const newTask={
           id:Math.random(),
            todo: inputTask,
            date:selectedDate,
            time:selectedTime,
        };
        setList([...list, newTask]);
        setInputTask('');
    };

    const handledeleteTodo =(id)=>{
        const newList=list.filter((todo) =>todo.id!==id);
        setList(newList);
    };
    const handleInputChange=(event)=>{
        setInputTask(event.target.value);

    };
    return(
        <div className="Todo">
            <h1>My To-Do-List</h1>
            <div className="Top">
                <input className="input" type="text" value={inputTask} onChange={handleInputChange} placeholder="Enter a task" />
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
<input type="time"  value={selectedTime}  onChange={(e) => setSelectedTime(e.target.value)}/>

 <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>
            <ul>
        {
          list.map((todo) => (
            <li className="task" key={todo.id}>
    <div>
        <strong>Date:</strong> {todo.date}<br />
        <strong>Time:</strong> {todo.time}<br />
        <strong>Task:</strong> {todo.todo}
    </div>
    <button onClick={() => handledeleteTodo(todo.id)}>
        Delete
    </button>
</li>
                    
                    ))}
                    
                
            </ul>
        </div>
    );

        };
    export default TodoList;
   
