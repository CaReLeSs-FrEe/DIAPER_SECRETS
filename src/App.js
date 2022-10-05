import logo from './logo.svg';
import './App.css';
import { application } from 'express';

const express = require('express');
const app =express();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DIAPER SECRETS</h1>
        <p>
          Welcome to the dirtiest place you'll ever be in!
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
    </div>
  );
}

app.get('/', (req,res,next)=> {
  res.send('whats uppppppp')
})

app.listen('3000', () => {
  console.log('hey lets get dirty on 3000!')
})

export default App;
