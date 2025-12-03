import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [first, setfirst] = useState("");
const [second, setSecond] = useState("");
const [third, setThird] = useState("");
const chk = () =>{
  console.log("button clicked");
}
const handleSubmit = () => {
  console.log("Form submitted");
}


  return (
    <div className="App">
      <h1>First State Value: {first}</h1>
      <input type="text" value={first} onChange={(e) => setfirst(e.target.value)} />
      <button onClick={chk}>Click Me</button>
      <div>
        {Array.from({ length: 5 }).map((_, index) => <h1 key={index}>Hello World {index}</h1>)}
      </div>
    </div>
  );
}

export default App;
