import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
 const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Food shopping',
        day: 'Feb 6th at 4:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Car Wash',
        day: 'Jan 10th at 8:30am',
        reminder: false
    },
])
// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((tasks) => tasks.id !== id))
}

// Toggle reminder
const toggleReminder =(id) => {
setTasks(tasks.map((tasks) => tasks.id ===id ? {...tasks, reminder: !tasks.reminder} : tasks))}
 

return (
    <div className="container">
      <Header onAdd ={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
{showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
