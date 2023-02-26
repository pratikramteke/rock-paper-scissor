import { useEffect, useState } from "react";
import style from "./style.css";
function App() {
  const [move, setMove] = useState("");
  const [cmove, setcMove] = useState("");
  const [win, setwin] = useState("");

  const computer = ["✊", "✋", "✌️"];

  useEffect(() => {
    check(move, cmove);
  }, [move, cmove]);

  function handleSubmit(input) {
    setMove(input);
    setcMove(computer[Math.floor(Math.random() * 3)]);
  }

  function check(move, cmove) {
    let output = move + cmove;
    switch (output) {
      case "✊✌️":
      case "✋✊":
      case "✌️✋":
        setwin("YOU WIN");
        break;
      case "✌️✊":
      case "✊✋":
      case "✋✌️":
        setwin("YOU LOSE");
        break;
      case "✊✊":
      case "✋✋":
      case "✌️✌️":
        setwin("DRAW");
        break;
    }
  }

  return (
    <div className="container">
      <div>
        {computer.map((item, ind) => (
          <button key={ind} onClick={() => handleSubmit(item)}>
            {item}
          </button>
        ))}
      </div>
      <div>YOUR: {move}</div>
      <div>COMPUTER: {cmove}</div>
      <div>RESULT: {win}</div>
    </div>
  );
}
export default App;
