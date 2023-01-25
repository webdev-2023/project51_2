/* Requirement Statement: 
   The reducer of your store should be able to add, delete, and edit a specific to-do/task 
   and change the 'completed' variable to: true
*/

import { createSlice } from "@reduxjs/toolkit"

const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'Content 1',
            completed: false
        }
    }
}

// tasksSlice - is the name of the slice of state that we will implement in our store.
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTodoState,
    // The reducers to manipulate the initial state or current state.
    reducers: {
        // Add a new task, the 'content' of which is passed as action payload.
        add: (state, action) => {
            let newObj = {}
            newObj[state.nextId] = { 'content': action.payload, 'completed': false }        // creating a new object using state.nextId as a key

            state.data = { ...state.data, ...newObj }                                       // merging two objects
            state.nextId += 1
        },

        // Editing a record has two steps:
        // 1. edit - when edit 'icon' is clicked. Here, action.payload contains the task id
        edit: (state, action) => {
            document.getElementById('task').value = state.data[action.payload].content      // display the task contents in the input box.

            let updateBtn = document.getElementById('subBtn')
            updateBtn.innerText = 'Update'                                      // change the Submit button text to 'Update'.

            state.data[action.payload].update = true                            // for this task object, add a new property 'update' (and set it to true).
        },

        // 2. update - when 'Update' button is clicked. Here, action.payload contains the task 'content'
        update: (state, action) => {
            let taskArr = Object.entries(state.data)
            taskArr.forEach((task) => {
                if (task[1].update) {                                          // find the task for which the 'update' property was set to 'true' 
                    state.data[task[0]].content = action.payload               // update the 'content' of this task with the new user input
                    delete task[1].update                                      // delete the 'update' property from this task object
                    let submitBtn = document.getElementById('subBtn')
                    submitBtn.innerText = 'Add'                                // change the Submit button text back to 'Add'.
                }
            })
        },

        // Delete a specific task. Here, action.payload contains the task id.
        remove: (state, action) => {
            delete state.data[action.payload]
        },

        // Toggle a specific task as 'completed'. Here, action.payload contains the task id.
        completed: (state, action) => {
            state.data[action.payload].completed = !state.data[action.payload].completed
        },
    },
})

// Generating action creators for each case reducer function.
export const { add, update, edit, remove, completed } = tasksSlice.actions

// Exporting the reducer function that will be implemented in the 'store'.
export default tasksSlice.reducer