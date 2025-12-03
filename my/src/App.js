import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [first, setfirst] = useState("");
const [second, setSecond] = useState("");
const [third, setThird] = useState("");
const [fourth, setFourth] = useState("");
const [fifth, setFifth] = useState("");
const chk = () =>{
  console.log("button clicked");
}
const handleSubmit = () => {
  console.log("Form submitted");
}
const handleReset = () => {
  console.log("Form reset");
}
const handleChange = (value, setter) => {
  setter(value);
}
const validateForm = () => {
  return first && second && third;
}
const clearForm = () => {
  setfirst("");
  setSecond("");
  setThird("");
  setFourth("");
  setFifth("");
}
const handleLog = () => {
  console.log({ first, second, third, fourth, fifth });
}


  return (
    <div className="App">
      <h1>First State Value: {first}</h1>
      <input type="text" value={first} onChange={(e) => setfirst(e.target.value)} />
      <h2>Second State Value: {second}</h2>
      <input type="text" value={second} onChange={(e) => setSecond(e.target.value)} />
      <h3>Third State Value: {third}</h3>
      <input type="text" value={third} onChange={(e) => setThird(e.target.value)} />
      <h4>Fourth State Value: {fourth}</h4>
      <input type="text" value={fourth} onChange={(e) => setFourth(e.target.value)} />
      <h5>Fifth State Value: {fifth}</h5>
      <input type="text" value={fifth} onChange={(e) => setFifth(e.target.value)} />
      <button onClick={chk}>Click Me</button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={clearForm}>Clear All</button>
      <button onClick={handleLog}>Log Values</button>
      <div>
        {Array.from({ length: 5 }).map((_, index) => <h1 key={index}>Hello World {index}</h1>)}
      </div>
      <hr />
      <p>Form Status: {validateForm() ? "Valid" : "Invalid"}</p>
      <p>Total Fields Filled: {[first, second, third, fourth, fifth].filter(v => v).length} / 5</p>
    </div>
  );
}

export default App;
