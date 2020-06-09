import React from 'react';
import './App.css';
import Upload from './FileUpload';
import Graphics from './Graphics';
import Words from './Words';

function App(props) {
  const addMessage = props.addMessage;
  const symbolsAndCount = props.symbolsAndCount;
  const wordsAndCount = props.wordsAndCount;
  const Sentences = props.Sentences;
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Text analyses
        </div>
      </header>
      <Upload addMessage={addMessage} />
      <Graphics symbolsAndCount={symbolsAndCount} />
      <div className='App-text'>
        <div>
          Sentences count = {Sentences.length}
        </div>
      </div>
      <Words wordsAndCount={wordsAndCount} />
    </div>
  );
}

export default App;
