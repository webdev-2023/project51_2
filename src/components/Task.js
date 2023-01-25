/* Requirement Statement:  
   Each to-do/task rendered in your application should then have three buttons.
    ○ Edit,
    ○ Delete,
    ○ and Completed
*/

// Importing the useDispatch function to call reducers.
// Importing the action creators implemented in the tasks reducer.
import { useDispatch } from 'react-redux'
import { completed, edit, remove } from '../features/tasksSlice';

const Task = ({ task }) => {

    /* Note (example of a task): 'task' is an array of following elements
    task = [1, {
        "content": "Content 1",
        "completed": true
    }]*/

    const dispatch = useDispatch()
    return (
        // grey out the completed task
        <div className={`task ${task[1].completed && 'done'}`}>
            <h3>
                {/* Display the task contents and icon for edit, delete and complete. */}
                <div className='task-contents'>
                    {task[1].content}
                </div>
                <div className='task-icons'>
                    <i className="fa fa-check-circle-o i-complete"
                        aria-hidden="true"
                        title="Mark as complete"
                        onClick={() => dispatch(completed(task[0]))}>
                    </i>
                    <i className="fa fa-pencil-square-o i-edit"
                        aria-hidden="true"
                        title="Edit Task"
                        onClick={() => dispatch(edit(task[0]))}>
                    </i>
                    <i className="fa fa-times i-delete"
                        aria-hidden="true"
                        title="Delete Task"
                        onClick={() => dispatch(remove(task[0]))}>
                    </i>
                </div>
            </h3>
        </div>
    )
};

export default Task;
