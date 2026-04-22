import { useState } from "react"
import ToDoDisplayList from "./components/ToDoDisplayList"
import ToDoForm from "./components/ToDoForm"

function App() {
  
  // set up list to track ToDos
  const [toDos, setToDos] = useState([])

  // set up username to display signed-in user
  const [displayUsername, setDisplayUsername] = useState("")

  // function to add a ToDo
  const addToDo = (toDo) => {
    setToDos([...toDos, toDo])
  }

  // function to delete a ToDo
  const deleteToDo = (id) => {
    // filter out all toDos with a different index and put them in a new array
    const updatedToDos = toDos.filter((task) => task.id !==id)

    //set toDos to the new array
    setToDos(updatedToDos)
  }

  // function to delete all completed toDos
  const deleteCompletedToDos = () => {
    
    // filter out all toDos that are incomplete and add them to a new array
    const updatedToDos = toDos.filter((task) => task.completed === false)

    // setToDos to the new array
    setToDos(updatedToDos)
  }

  return (
    <>
      <h1>To Do List App</h1>

      {/* import ToDoDisplayList component with fed props */}
      <ToDoDisplayList 
        toDos={toDos} 
        deleteToDo={deleteToDo} 
        deleteCompletedToDos={deleteCompletedToDos} 
        displayUsername={displayUsername}
      />

      {/* import ToDoForm component with fed props */}
      <ToDoForm 
        addToDo={addToDo} 
        displayUsername={displayUsername} 
        setDisplayUsername={setDisplayUsername}
      />
    </>
  )
}

// export app
export default App
