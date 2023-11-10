import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = (inputText) => {
    if (inputText.trim() === '') {
      return 0;
    }
    return inputText.trim().split(/\s+/).length;
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type or paste text here..."
        onChange={handleTextChange}
        value={text}
      ></textarea>
      <p>Word Count: {countWords(text)}</p>
    </div>
  );
}

export default WordCounter;
