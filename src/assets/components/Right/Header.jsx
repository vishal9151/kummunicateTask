import React from 'react'

function Header({value1, value2}) {
  return (
    <div style={{marginLeft: "40px",fontSize: "larger"}}>
    <h2>{value1}</h2>
    <h6 style={{marginTop:0}}>{value2}</h6>
    </div>
    
  )
}

export default Header