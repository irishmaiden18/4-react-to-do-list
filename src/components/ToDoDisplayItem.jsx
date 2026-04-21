
const ToDoDisplayItem = ({toDo}) => {
  return (
    <>
        <h3>{toDo.task}</h3>
        <p>{toDo.taskDescription}</p>
        {toDo.completed && <h5>Completed!</h5>}
    </>
  )
}

export default ToDoDisplayItem