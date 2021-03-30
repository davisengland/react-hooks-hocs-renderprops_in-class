import React, { useState } from 'react'

const Toggle = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={props.style}>
      {isOpen ? props.children : null}
      <button onClick={() => setIsOpen(!isOpen)}>Open/Close</button>
    </div>
  )
}

export default Toggle;
