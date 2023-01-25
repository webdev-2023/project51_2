// Components to iterate over all the tasks

// Importing the useSelector to select the required slices of state.
import { useSelector } from 'react-redux'
import Task from "./Task";

const Tasks = () => {
    const tasks = useSelector((state) => state.tasks)       // slice of the state (coming from store)

    let taskArr = Object.entries(tasks.data)                // converting the 'tasks' object in to an array, so that we can iterate over the map() function

    return (
        <>
            {taskArr.map((task) =>
                <Task key={task[0]} task={task} />
            )}
        </>
    )
}
export default Tasks;
