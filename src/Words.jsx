import React from "react";
import "./Words.css";
import Message from './Message';

const Words = (props) => {
  let messages = [];
  let infos = props.wordsAndCount;
  
  Object.entries(infos).map((key, value) => {
    let mes = key[0] + " - " + key[1];    
    messages.push(mes);

  });

  
  let messageElements = messages.map(mes =>
    <Message message = {mes}/>
)

  return (
    <div className="Words">
      <h2>Words/Frequency</h2>
      {messageElements}
    </div>
  );
};

export default Words;
