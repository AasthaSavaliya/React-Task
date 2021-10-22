import { useState } from "react";
import "./App.css";

function App() {
  const [text, settext] = useState("");
  const [showtext, setShowtext] = useState([]);
  return (
    <div className="main">
      <div className="left">
      <h2 className="lbl">First name:</h2>
        <input type="text" className="txtbox"
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <br />
        <button type="button" onClick={() => {
            setShowtext(showtext.concat(text));}} 
            className="btn btn-secondary">Submit</button>
      </div>
      <div className="right">
        {showtext.map((e) => {
          return <h1>{e}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;

