import ToDoDisplayItem from "./ToDoDisplayItem"

// destructure fed props
const ToDoDisplayList = ({toDos, deleteToDo, deleteCompletedToDos, displayUsername}) => {
  
    // function to display our list of ToDos, takes in an array of ToDos
    const displayList = (toDos) => {

        // creates a copy of the array of toDos
        let updatedToDos = [...toDos]

        // if displayUserName is not empty
        if (!displayUsername == "") {

            // filter all the toDos with the given displayUsername and add them to the copied array
            updatedToDos = toDos.filter((task) => task.username === displayUsername)
        }
        
        // function return
        return (
            <>
                {/* cycle through the updatedToDos to display each one below as an LI using the ToDoDisplay Item component. feed necessary props */}
                {updatedToDos.map((toDo) => (
                    // set key equal to the unique id's created when adding a toDo
                    <li key={toDo.id}>
                        <ToDoDisplayItem toDo={toDo} deleteToDo={deleteToDo}/>
                    </li>
                ))}
            </>
        )
    }
  
    // component return
    return (
    <>
        <h2>To Do List</h2>

        {/* display the username submitted */}
        <h3>Username: {displayUsername}</h3>

        {/* display an ordered list of toDos given a list of toDos*/}
        <ol>
            {displayList(toDos)}
        </ol>

        {/* add a button to delete all completed tasks */}
        <button onClick={deleteCompletedToDos}>Delete Completed Tasks</button>
    </>
  )
}

export default ToDoDisplayList