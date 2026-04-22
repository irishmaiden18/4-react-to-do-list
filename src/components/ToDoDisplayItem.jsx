
// destructure the given props
const ToDoDisplayItem = ({toDo, deleteToDo}) => {

    const capitalizeFirstLetterEveryWord = (string) => {

        const words = string.split(" ")
        console.log("words" + words)
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        return capitalizedWords.join(" ")
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


  return (
    <>
        <h3 className="task">{capitalizeFirstLetterEveryWord(toDo.task)}</h3>
        <p><b>Description:</b> {capitalizeFirstLetter(toDo.taskDescription)}</p>
        <p><b>{toDo.priority}</b> Priority!</p>
        <p><b>User:</b> {toDo.username}</p>
        {/* only display the completed part if the item is, in fact, completed */}
        {toDo.completed && <h5>Completed!</h5>}
        <button onClick={() => deleteToDo(toDo.id)}>Delete To Do</button>
    </>
  )
}

export default ToDoDisplayItem