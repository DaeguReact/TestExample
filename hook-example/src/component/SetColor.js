import React, {useState} from 'react';

const SetColor = () => {
  let textColor = {
    color: 'black'
  }

  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const addList = (e) => {
    setList([
      ...list,
      input
    ])

    setInput('')
    textColor.color = input
  }

  const keyPress = (e) => {
    if(e.key === 'Enter') {
      addList(e)
    }
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input
        value={input}
        onChange={onChange}
        onKeyPress={keyPress}
      />
      <button onClick={addList}>Add</button>
      <ul>
        { list.map((listItem, idx) => {
          return <li key={idx} style={{ color: listItem }}>{listItem}</li>
        }) }
      </ul>

    </div>
  );
};

export default SetColor;
