import { useState } from "react";
import "./styles.css";

export default function App() {
  const [variant, setVariant] = useState("Primary");
  const [state, setState] = useState("Enabled");
  const [caption, setCaption] = useState("Default");
  const [btnState, setBtnState] = useState({
    backgroundColor: "blue",
    status: true,
    text: ""
  });

  const handleVariant = (e) => {
    let bgColor;
    if (e.target.value === "Primary") {
      bgColor = "blue";
    } else if (e.target.value === "Warning") {
      bgColor = "orange";
    } else if (e.target.value === "Danger") {
      bgColor = "red";
    }
    setVariant(e.currentTarget.value);
    setBtnState({
      ...btnState,
      backgroundColor: bgColor
    });
  };
  const handleState = (e) => {
    setState(e.target.value);
    let flag = e.target.value === "Enabled" ? false : true;
    setBtnState({
      ...btnState,
      status: flag
    });
  };
  const handleCaption = (e) => {
    setCaption(e.target.value);
    setBtnState({
      ...btnState,
      text: e.target.value
    });
  };
  return (
    <div className="App">
      <div>
        Button Variant : &nbsp;
        <select value={variant} onChange={handleVariant}>
          <option>Primary</option>
          <option>Warning</option>
          <option>Danger</option>
        </select>
      </div>
      <div>
        Button State : &nbsp;
        <input
          type="radio"
          value="Enabled"
          checked={state === "Enabled"}
          onChange={handleState}
        />
        Enabled
        <input
          type="radio"
          value="Disabled"
          checked={state === "Disabled"}
          onChange={handleState}
        />
        Disabled
      </div>
      <div>
        Button Caption : &nbsp;
        <input type="text" value={caption} onChange={handleCaption} />
      </div>
      <br />
      <button
        style={{ backgroundColor: btnState.backgroundColor, color: "#fff" }}
        disabled={btnState.status}
      >
        {caption}
      </button>
    </div>
  );
}
