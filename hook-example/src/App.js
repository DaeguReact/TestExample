import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [userId, setUserId] = useState(1);
  const [name, setName] = useState();
  const [nick, setNick] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) =>
      res
        .json()
        .then((value) => {
          setName(value["name"]);
          setNick(value["username"]);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        })
    );
  }, [userId]);

  const hanldeUserInputChange = (e) => {
    setUserId(e.target.value);
  };
  return (
    <div id="main">
      <Card name={name} className="card" />
      <input type="text" value={userId} onChange={hanldeUserInputChange} />
    </div>
  );
}
export default App;
