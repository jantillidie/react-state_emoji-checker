import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return <Event />;
}

function Event() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";
  console.log(code);

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }

  function handleResetCode() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={handleClick}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={handleClick}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={handleClick}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={handleResetCode}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
