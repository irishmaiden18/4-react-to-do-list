import { useState } from "react"

// destructure fed props
const ToDoForm = ({addToDo, setDisplayUsername, isEditMode, setIsEditMode, confirmUpdate}) => {

    // create a default task to use for set up and return fields to blank state
    const defaultTask = {
        id: "",
        task: "",
        taskDescription: "",
        priority: "",
        completed: false,
        username: ""
    }



    // set up a state variable to track changes in the add task form
    const [taskData, setTaskData] = useState(defaultTask)

    // set up a state variable to track changes in the user sign-in form
    const [submitUsername, setSubmitUsername] = useState("")



    // handle change function to track the changes to the fields in the add task form
    const handleChange = (event) => {

        //destructure name and value from target to get the data so we can refer to them as name and value
        const {name, value} = event.target
            
            // create an updatedTask variable to hold the exisiting task data as well as the change
            const updatedTaskData ={
                ...taskData,
                [name]: value
            }

            //set taskData to the updatedtaskData
            setTaskData(updatedTaskData)
    }



    // a function for submitting data
    const handleSubmit = (event) => {
        
        // prevent the page refresh
        event.preventDefault()

        // if the user doesn't enter a task name
        if (taskData.task === "") {

            // alert the user
            alert("Task name cannot be empty!")
        }

        // create a new task and populate it with the data from taskData we get from the form. if username is not defined fill in "unclaimed"
        const newTask = {
            // use the data as a unique ID
            id: Date.now(),
            task: taskData.task,
            taskDescription: taskData.taskDescription,
            priority: taskData.priority,
            completed: taskData.completed,
            username: taskData.username || "unclaimed"
        }
        
        // call addToDo function to add our task to our list of tasks
        addToDo(newTask)

        // set the form fields to blank using our default object
        setTaskData(defaultTask)
    }



    // a function to handle submitting the sign in form
    const handleSignInSubmit = (event) => {

        //prevent the page refresh
        event.preventDefault()

        // set displayUsername to our username recorded on submit, this is what will display in other parts of the app
        setDisplayUsername(submitUsername)

        // return the form to blank
        setSubmitUsername("")
    }



    // a function to handle updating the todo
    const handleConfirm = (event) => {

        // prevent the page refresh
        event.preventDefault()

        // call confirmUpdate function with the updated data to update our todoList
        confirmUpdate(taskData.task, taskData.taskDescription, taskData.priority, taskData.username)
    }



  return (
    <>
        {/* if we are editing a todo */}
        {isEditMode? (
            <>
                {/* display an editing a todo form */}
                <h2>Now Editing A To Do</h2>
                <form onSubmit={handleConfirm}>
                    <div>
                        <label>Task Name: </label>
                        <input 
                            // takes in text input
                            type="text"
                            // links the task to our state variable
                            name="task"
                            // records the input in our taskData state variable
                            value={taskData.task} 
                            // calls the handleChange function to deal with changes to the field
                            onChange={handleChange}
                            className="task-input"
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
                        <label>User Responsible for Task: </label>
                        <input
                            type="text"
                            name="username"
                            value={taskData.username}
                            onChange={handleChange}
                            className="user-responsible"
                        />
                    </div>
                    <div className="submit">
                        <button>Confirm</button>
                        {/* type button, so it is not considered a submit event for our form */}
                        <button type="button" onClick={() => setIsEditMode(false)}>Cancel</button>
                    </div>
                </form>
            </>
        ) : (
            <>
                {/* if we are NOT editing a todo, display the add todo form */}
                <h2>Add A To Do</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Task Name: </label>
                        <input 
                            // takes in text input
                            type="text"
                            // links the task to our state variable
                            name="task"
                            // records the input in our taskData state variable
                            value={taskData.task} 
                            // calls the handleChange function to deal with changes to the field
                            onChange={handleChange}
                            className="task-input"
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
                        <label>User Responsible for Task: </label>
                        <input
                            type="text"
                            name="username"
                            value={taskData.username}
                            onChange={handleChange}
                            className="user-responsible"
                        />
                    </div>
                    <div className="submit">
                        <button>Add Task</button>
                    </div>
                </form>
            </>
        )}



        <h2>Sign In</h2>
        {/* form to sign in as a user */}
        <form>
            <div>
                <label>Username: </label>
                <input 
                    type="text"
                    name="submitUsername"
                    value={submitUsername}
                    // sets the submitUsername state variable to the input at time of change
                    onChange={(event) => setSubmitUsername(event.target.value)}
                    className="username"
                />
            </div>
            <div className="submit">
                <button onClick={handleSignInSubmit}>Sign In</button>
            </div>
        </form>
    </>
  )
}



// export component
export default ToDoForm