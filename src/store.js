// for the 'store' to access the reducer and the actions applicable to the of the state, importing the reducer from taskSlice.js
import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./features/tasksSlice"

// adding the taskSlice reducer to the store
export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
})
