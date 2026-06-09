import React from 'react'

function Child2({selectOption}) {
  return (
    <div>
      Child Component 2
      <button onClick={()=>selectOption("Option 2")}>Click</button>
    </div>
  )
}

export default Child2
