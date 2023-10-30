// import { useState } from "react";
import "./App.css";
import Left from "./assets/components/Left/Left";
import Right from "./assets/components/Right/Right";
import { useContext } from "react";
import Context from "./context/Contextuser";

function App() {
  console.log(useContext(Context));
  return (
    <>
      <div className="container">
        <div className="main-container">
          <Left />
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
