import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let wordsAndCount = new Object();
let symbolsAndCount = new Object();
let Sentences = new Object();

let addMessage =(data) =>{
  wordsAndCount = data.wordsAndCount;
  symbolsAndCount = data.symbolsAndCount;
  Sentences = data.sentences;
  debugger;
  renderTree();
};

const renderTree = () =>{
  ReactDOM.render(
  <React.StrictMode>
    <App addMessage = {addMessage} 
    wordsAndCount ={wordsAndCount} 
    symbolsAndCount = {symbolsAndCount}
    Sentences = {Sentences}
    />
  </React.StrictMode>,
  document.getElementById('root'));
};

renderTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
