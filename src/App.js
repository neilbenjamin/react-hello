//Main app that exports to index.js This is the app component that all other compnent pages beed to be exported to and
// imported on for exporting to index.js.

import './App.css';
import UserObjectComponent from './userObject.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UserObjectComponent /> 
      </header>
    </div>
  );
}

export default App;
