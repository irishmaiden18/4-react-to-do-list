import ToDoDisplayItem from "./ToDoDisplayItem"

const ToDoDisplayList = ({toDos, deleteToDo, deleteCompletedToDos, displayUsername}) => {
  
    const displayNoUser = (toDos) => {
        return (
            <>
                {toDos.map((toDo) => (
                    <li key={toDo.id}>
                        <ToDoDisplayItem toDo={toDo} deleteToDo={deleteToDo}/>
                    </li>
                ))}
            </>
        )
    }

    const displayWithUser = (toDos) => {
        //const updatedToDos = toDos.filter((task) => task.completed === false)

        const updatedToDos = toDos.filter((task) => task.username === displayUsername)

        return (
            <>
                {updatedToDos.map((toDo) => (
                    <li key={toDo.id}>
                        <ToDoDisplayItem toDo={toDo} deleteToDo={deleteToDo}/>
                    </li>
                ))}
            </>
        )
    }
  
    return (
    <>
        <h2>To Do List</h2>
        <h3>Username: {displayUsername}</h3>
        <ol>
            {displayUsername ? displayWithUser(toDos) : displayNoUser(toDos)}
        </ol>
        <button onClick={deleteCompletedToDos}>Delete Completed Tasks</button>
    </>
  )
}

export default ToDoDisplayList