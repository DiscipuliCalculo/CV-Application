import logo from './logo.svg';
import './App.css';
import GeneralInfo from './Components/GenInfo';
import Education from './Components/EduInfo';
import Jobs from './Components/JobExp';
import React from 'react';




class App extends React.Component {

  render() {
    return(
      <div>
        <GeneralInfo/>
        <Education/>
        <Jobs/>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <generalInfo/>
    </div>
  );
}
*/

export default App;
