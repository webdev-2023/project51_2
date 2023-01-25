/* Requirement Statement: Ensure you have a form component implemented to add additional tasks.
*/

// Importing the useState hook to capture the input in the form.
// Importing the useDispatch function to call reducers.
// Importing the action creators implemented in the tasks reducer.
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { add, update } from '../features/tasksSlice';

const AddTask = () => {
    // local component level state to capture form data
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task.')
            return
        }
        // Submit button has duel purpose - for Adding a new record or Updating an existing record onSubmit.
        let submintBtn = document.getElementById('subBtn')
        submintBtn.innerText === 'Add' ? dispatch(add(text)) : dispatch(update(text))

        setText('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label >Task</label>
                <input type="text" id="task" placeholder="Add Task Description" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button className="btn btn-block" id="subBtn">Add</button>

        </form>)
};

export default AddTask;
