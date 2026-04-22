
const ToDoDisplayItem = ({toDo, deleteToDo}) => {
  return (
    <>
        <h3>{toDo.task}</h3>
        <p>{toDo.taskDescription}</p>
        {toDo.completed && <h5>Completed!</h5>}
        <button onClick={() => deleteToDo(toDo.id)}>Delete To Do</button>
    </>
  )
}

export default ToDoDisplayItem