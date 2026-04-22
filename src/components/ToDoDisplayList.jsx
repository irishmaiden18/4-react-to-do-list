import ToDoDisplayItem from "./ToDoDisplayItem"

// destructure fed props
const ToDoDisplayList = ({toDos, deleteToDo, deleteCompletedToDos, displayUsername, editTodo}) => {
  
    // function to display our list of ToDos, takes in an array of ToDos
    const displayList = (toDos) => {

        // creates a copy of the array of toDos
        let updatedToDos = [...toDos]

        // if displayUserName is not empty
        if (displayUsername !== "") {

            // filter all the toDos with the given displayUsername and add them to the copied array
            updatedToDos = toDos.filter((task) => task.username === displayUsername)
        }
        
        // function return
        return (
            <>
                {/* if updatedToDos has no elements */}
                {/* cycle through the updatedToDos to display each one below as an LI using the ToDoDisplay Item component. feed necessary props */}
                {updatedToDos.length !== 0 ?
                    (updatedToDos.map((toDo) => (
                        // set key equal to the unique id's created when adding a toDo
                        <li key={toDo.id}>
                            <ToDoDisplayItem toDo={toDo} deleteToDo={deleteToDo} editTodo={editTodo}/>
                        </li>
                    ))) : (
                        <h3 className="empty-list">List is Empty! Please add an item.</h3>
                    )}
            </>
        )
    }


  
    // component return
    return (
    <>
        {/* display the username submitted */}
        <h3 className="display-username">Username: {displayUsername}</h3>



        <h2>To Do List</h2>

        {/* display an ordered list of toDos given a list of toDos ONLY if the toDoList has at least 1 item*/}
        {toDos.length === 0 ? (

            <h3 className="empty-list">List is Empty! Please add an item.</h3>

        ) : (

            <ol>
                {displayList(toDos)}
            </ol>
        )}



        <div className="display">
            {/* add a button to delete all completed tasks */}
            <button className="delete-comppleted-tasks" onClick={deleteCompletedToDos}>Delete Completed Tasks</button>
        </div>
    </>
  )
}


// export the component
export default ToDoDisplayList