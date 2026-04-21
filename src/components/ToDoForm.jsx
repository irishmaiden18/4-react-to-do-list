import { useState } from "react"

const ToDoForm = ({addToDo}) => {

    const defaultTask = {
        id: "",
        task: "",
        taskDescription: "",
        completed: false
    }

    const [taskData, setTaskData] = useState(defaultTask)
    // const [task, setTask] = useState("")
    // const [taskDescription, setTaskDescription] = useState("")
    // const [completed, setCompleted] = useState("")

    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedTaskData = {
            ...taskData,
            [name]: value
        }

        setTaskData(updatedTaskData)
        // console.log("change called")
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: Date.now(),
            task: taskData.task,
            taskDescription: taskData.taskDescription,
            completed: taskData.completed
        }
        // console.log("taskData.completed" + taskData.completed)
        addToDo(newTask)

        setTaskData(defaultTask)
        // console.log("submit called")
    }

  return (
    <>
        <h2>Add A To Do</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Task Name: </label>
                <input 
                    type="text"
                    name="task"
                    value={taskData.task} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Task Description: </label>
                <textarea
                    name="taskDescription"
                    value={taskData.taskDescription}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Complete</label>
                <select
                    name="completed"
                    value={taskData.completed}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="true">Complete</option>
                    <option value="false">Incomplete</option>
                </select>
            </div>
            <button>Add Task</button>
        </form>
    </>
  )
}

export default ToDoForm