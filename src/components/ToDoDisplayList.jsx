import ToDoDisplayItem from "./ToDoDisplayItem"

const ToDoDisplayList = ({toDos}) => {
  return (
    <>
        <h2>To Do List</h2>
        {toDos.map((toDo) => (
            <ol key={toDo.id}>
                <li><ToDoDisplayItem toDo={toDo}/></li>
            </ol>
        ))}
    </>
  )
}

export default ToDoDisplayList