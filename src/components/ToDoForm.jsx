import { useState } from "react"

const ToDoForm = ({addToDo, displayUsername, setDisplayUsername}) => {

    const defaultTask = {
        id: "",
        task: "",
        taskDescription: "",
        priority: "",
        completed: false,
        username: ""
    }

    const [taskData, setTaskData] = useState(defaultTask)
    const [submitUsername, setSubmitUsername] = useState("")

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
            priority: taskData.priority,
            completed: taskData.completed,
            username: taskData.username
        }
        // console.log("taskData.completed" + taskData.completed)
        addToDo(newTask)

        setTaskData(defaultTask)
        // console.log("submit called")
    }

    const handleSignInSubmit = (event) => {
        event.preventDefault()

        setDisplayUsername(submitUsername)

        setSubmitUsername("")
    }

  return (
    <>
        <h2>Add A To Do</h2>
        <form>
            <h2>Sign In</h2>
            <div>
                <label>Username: </label>
                <input 
                    type="text"
                    name="submitUsername"
                    value={submitUsername}
                    onChange={(event) => setSubmitUsername(event.target.value)}
                />
            </div>
            <button onClick={handleSignInSubmit}>Sign In</button>
        </form>
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
                <div>
                    <textarea
                        name="taskDescription"
                        value={taskData.taskDescription}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            <div>
                <label>Priority </label>
                <select
                    name="priority"
                    value={taskData.priority}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
            </div>
            <div>
                <label>Complete </label>
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
            <div>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    value={taskData.username}
                    onChange={handleChange}
                />
            </div>
            <button>Add Task</button>
        </form>
    </>
  )
}

export default ToDoForm