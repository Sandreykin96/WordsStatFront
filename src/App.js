import React from 'react';
import './App.css';
import Upload from './Components/FileUpload/FileUpload';
import Graphics from './Components/Graphics/Graphics';
import Words from './Components/Words/Words';

function App(props) {
  const addMessage = props.addMessage;
  const symbolsAndCount = props.symbolsAndCount;
  const wordsAndCount = props.wordsAndCount;
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Text analyses
        </div>
      </header>
      <Upload addMessage={addMessage} />
      <Graphics symbolsAndCount={symbolsAndCount} />
      <Words wordsAndCount={wordsAndCount} />
    </div>
  );
}

export default App;
