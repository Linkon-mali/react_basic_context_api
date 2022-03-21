import React, { useState } from 'react';
import './App.css';
import Value from './component/Value';
import Context from './context/context'

function App() {

  const [data, setData] = useState({
    value: 10,
    tasks: [
      'Caculation Task 1',
      'Caculation Task 2',
      'Caculation Task 3',
    ],
    auth: false,
  });

  return (
      <Context.Provider value={{state: data, setData}}>
        <div className="App">
          <h2>React Context API Example</h2>
          <hr/>
          {/* <Value value={data.value} tasks={data.tasks} /> */}
          <Value />
        </div>
      </Context.Provider>
  );
}

export default App;
