import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
 
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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((tasks) => tasks.id !== id))
}

// Toggle reminder
const toggleReminder =(id) => {
setTasks(tasks.map((tasks) => tasks.id ==id ? {...tasks, reminder: !tasks.reminder} : tasks))}
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
