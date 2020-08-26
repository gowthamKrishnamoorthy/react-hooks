import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

function App() {
  return (
    <div className="App">
     <ClassCounter/>
     <HooksCounter/>
     <HookCounterTwo />
     <HookCounterThree />
     <HookCounterFour />
    </div>
  );
}

export default App;
