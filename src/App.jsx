import { useState } from "react"
import ToDoDisplayList from "./components/ToDoDisplayList"
import ToDoForm from "./components/ToDoForm"

function App() {
  
  // set up list to track ToDos
  const [toDos, setToDos] = useState([])

  // set up username to display signed-in user
  const [displayUsername, setDisplayUsername] = useState("")

  // set up a isEditMode state variable to keep track of if we are editing or not
  const [isEditMode, setIsEditMode] = useState(false)

  // this is the id of the item you want to edit!
  const [editId, setEditId] = useState(null)



  // function to add a ToDo
  const addToDo = (toDo) => {

    // copy the initial array and then add the new one
    setToDos([...toDos, toDo])
  }



  // function to delete a ToDo
  const deleteToDo = (id) => {
    // filter out all toDos with a different index and put them in a new array
    const updatedToDos = toDos.filter((task) => task.id !== id)

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



  // function to change to isEditMode and set the id to edit, takes in todo id and taskData
  const editTodo = (id, taskData) => {

    // set isEditMode state to true so we get the edit form
    setIsEditMode(true)

    // set the editId to the parameter id
    setEditId(id)
  }


  // function to update most properties of a task, incl. task, description, priority & username. takes in the properties it updates as parameters
  const confirmUpdate = (task, description, priority, username) => {

    // go through each todo until we get to the one whose ID we want to update
    const updatedList = toDos.map((todo) => {

      // when we find the one to update,
      if(todo.id === editId) {

        // modify the properties to equal what is in the input fields by creating a new todo with those properties and those of our original todo. if one of the properties is blank use the property value already there in the list.
        const updatedTodo = {
          // use ...todo to retain all other properties of our todo
          ...todo,
          task: task || todo.task,
          taskDescription: description || todo.taskDescription,
          priority: priority || todo.priority,
          username: username || todo.username
        }

        // return updated todo to our final list
        return updatedTodo

      // if it is not the todo we want to update, 
      } else {

        // return the todo as is
        return todo
      }

    })
      // set our todolist to the updated list we just created with the updated todo
      setToDos(updatedList)
  }


  const handleCompleteTask = (id) => {

    // go through each todo until we get to the one whose ID we want to update
    const updatedList = toDos.map((todo) => {

      // when we find the one to update,
      if(todo.id === id) {

        // modify the completed property to equal the oposite of what it is now
        // use ...todo to retain all other properties of our todo
        const updatedTodo = {
          // use ...todo to retain all other properties of our todo
          ...todo,
          completed: !todo.completed
        }

        // return updated todo to our final list
        return updatedTodo

      // if it is not the todo we want to update, 
      } else {

        // return the todo as is
        return todo
      }
    })

    // set our todolist to the updated list we just created with the updated todo
    setToDos(updatedList)
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
        editTodo={editTodo}
        handleCompleteTask={handleCompleteTask}
      />

      {/* import ToDoForm component with fed props */}
      <ToDoForm 
        addToDo={addToDo} 
        setDisplayUsername={setDisplayUsername}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        confirmUpdate={confirmUpdate}
      />
    </>
  )
}



// export component
export default App