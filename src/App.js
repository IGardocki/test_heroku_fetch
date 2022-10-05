import logo from './logo.svg';
import './App.css';
import { TestContext } from './TestContext';
import React,{useEffect, useState} from 'react';

function App() {
  const [activity, setActivity] = useState('');

  // const gettersSetters = {activity, setActivity}

  useEffect(()=>{
    fetch('https://igardocki-heroku-backend-ex.herokuapp.com/')
    .then(res => res.json())
    .then(data => setActivity(data.activity))
  }, [])

  return (
    // <TestContext.Provider value={gettersSetters}>
      <div>{activity}</div>
    // </TestContext.Provider>
  );
}

export default App;
