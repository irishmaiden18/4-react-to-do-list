
// destructure the given props
const ToDoDisplayItem = ({toDo, deleteToDo, editTodo, handleCompleteTask}) => {

    // function to capitalize the first letter of every word of the task title
    const capitalizeFirstLetterEveryWord = (string) => {

        // split string on spaces
        const words = string.split(" ")

        // map through the array
        const capitalizedWords = words.map((word) => {

            // capitalize the first letter of each item in the array
            return word.charAt(0).toUpperCase() + word.slice(1)

        })

        // recreate a string from the array, joining with spaces
        return capitalizedWords.join(" ")
    }



    // a function to capitalize the first letter of this first word of the task description
    const capitalizeFirstLetter = (string) => {

        // capitalize the first letter of the first word of the string
        return string.charAt(0).toUpperCase() + string.slice(1)
    }



  return (
    <>
        {/* Display the todo */}
        <h3 className="task">{capitalizeFirstLetterEveryWord(toDo.task)}</h3>
        <p>- {capitalizeFirstLetter(toDo.taskDescription)}</p>
        <p><b>{toDo.priority}</b> Priority!</p>
        <p><b>Person Responsible:</b> {toDo.username}</p>
        {/* only display the completed part if the item is, in fact, completed */}
        {/* {toDo.completed && <h5>Completed!</h5>} */}
        <p>Completed: {toDo.completed ? "completed" : "incompleted"} <button onClick={() => handleCompleteTask(toDo.id)}>Complete</button></p>
        <button onClick={() => editTodo(toDo.id)}>Edit</button>
        <button onClick={() => deleteToDo(toDo.id)}>Delete To Do</button>
    </>
  )
}


// export the component
export default ToDoDisplayItem