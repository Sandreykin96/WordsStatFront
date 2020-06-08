import React from 'react';
import './App.css';
import Upload from './FileUpload';
import Graphics from './Graphics';

function App(props) {
  const addMessage = props.addMessage;
  const symbolsAndCount = props.symbolsAndCount;
  const wordsAndCount = props.wordsAndCount;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Text analyse
        </div>
      </header> 
       <Upload addMessage={addMessage}/>
       <Graphics symbolsAndCount = {symbolsAndCount}/>
    </div>
  );
}

export default App;
