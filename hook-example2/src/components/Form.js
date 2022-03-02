import React, { useReducer, useState } from "react";
import "../css/Form.css";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Form = () => {
  const [people, setPeople] = useState([]);

  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    secondName: "",
    age: 0,
  });

  const onChange = (e) => {
    dispatch(e.target);
  };

  const addPerson = () => {
    setPeople(...people, state);
    console.log(people);
  };

  return (
    <div id="form">
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        name="secondName"
        value={state.secondName}
        onChange={onChange}
      />
      <input type="text" name="age" value={state.age} onChange={onChange} />
      <button onClick={addPerson}>등록</button>
    </div>
  );
};
export default Form;
