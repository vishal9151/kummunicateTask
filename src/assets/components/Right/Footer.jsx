import React from 'react'
import Context from '../../../context/Contextuser'
import { useContext } from 'react'
function Footer() {
  const {count, setCount}=useContext(Context);
  const handleSubmit = () => {
    // e.preventDefault();
    setCount(count + 1);
  };
  return (
    <div style={{display: 'flex', justifyContent:"space-between", width: "80%",margin: "0 auto"}}>
        {count>1&&<button onClick={()=>setCount(count-1)}>Go Back</button>}
        {count<=4&&<button onClick={handleSubmit}>Next Step</button>}
    </div>
  )
}

export default Footer