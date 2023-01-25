/* Requirement Statement: create a to-do application using React and Redux.
*/

// Main Component - to display the Header, Add Task and Tasks components

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {

  return (
    <div className='container'>
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;

