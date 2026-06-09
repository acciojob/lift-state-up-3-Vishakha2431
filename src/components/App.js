
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";
const App = () => {
  const[selectedOption,setselectedOption]=useState("");
  function selectOption(option){
    setselectedOption(option)
  }

  return (
    <div>
      <Child1 selectOption={selectOption}/>
      <Child2 selectOption={selectOption}/>
      <div>Selected Option:{selectedOption}</div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
