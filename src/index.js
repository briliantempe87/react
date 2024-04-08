import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>p balap</h1>
      <Food />
      <Food />
      <Food />
      <Food />
    </div>
  );
}

function Food() {
  return (
    <div>
      <img src="food/soto.jpeg" alt="" />
      <h2>soto betawi</h2>
      <p>abdul</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
