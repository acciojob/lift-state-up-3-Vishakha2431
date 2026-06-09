import React from 'react'

function Child1({selectOption}) {
  return (
    <div>
      Child Component1
      <button onClick={()=>selectOption("Option 1")}>Clcik</button>
    </div>
  )
}

export default Child1
