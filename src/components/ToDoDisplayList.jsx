import ToDoDisplayItem from "./ToDoDisplayItem"

const ToDoDisplayList = ({toDos, deleteToDo}) => {
  return (
    <>
        <h2>To Do List</h2>
        <ol>
        {toDos.map((toDo) => (
            <li key={toDo.id}>
                <ToDoDisplayItem toDo={toDo} deleteToDo={deleteToDo}/>
            </li>
        ))}
        </ol>
    </>
  )
}

export default ToDoDisplayList