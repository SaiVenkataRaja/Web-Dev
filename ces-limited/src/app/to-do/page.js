'use client'
import { useState } from "react"

export default function To_Do() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    function handleAdd() {
        if (task.trim() !== "") {
            //setTasks([...tasks, task])
            setTasks((prevTasks) => [...prevTasks, { task: task, completed: false }]);

            setTask("")
        }
    }
    function handleDelete(indexToDelete) {

        const newTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(newTasks);
    }
    function handleToggleComplete(indexToToggle) {
        const updatedTasks = tasks.map((task, index) =>
            index === indexToToggle
                ? { ...task, completed: !task.completed }
                : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className="m-5">
            <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a Task" className="border-2 border-black-200 hover:border-gray-200" />
            <button onClick={handleAdd} className="ml-6 bg-blue-300 px-3 rounded-lg hover:bg-green-200 cursor-pointer">Add</button>

            <ul className="mt-5">
                {tasks.map((taskObj, index) => (
                    <li
                        key={index}
                        onClick={() => handleToggleComplete(index)}
                        className={`cursor-pointer bg-gray-100 px-3 py-1 rounded flex justify-between items-center ${taskObj.completed ? "line-through text-gray-500" : ""
                            }`}
                    >{taskObj.task}  <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent toggle when clicking 
                            handleDelete(index);
                        }}
                        className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
                    >
                            Delete
                        </button></li>
                ))}
            </ul>
        </div>
    )
}