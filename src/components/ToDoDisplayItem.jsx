
// destructure the given props
const ToDoDisplayItem = ({toDo, deleteToDo}) => {
  return (
    <>
        <h3>{toDo.task}</h3>
        <p>{toDo.taskDescription}</p>
        <p><b>{toDo.priority}</b> Priority!</p>
        <p>User: {toDo.username}</p>
        {/* only display the completed part if the item is, in fact, completed */}
        {toDo.completed && <h5>Completed!</h5>}
        <button onClick={() => deleteToDo(toDo.id)}>Delete To Do</button>
    </>
  )
}

export default ToDoDisplayItem