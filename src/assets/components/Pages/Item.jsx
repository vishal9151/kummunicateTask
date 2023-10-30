import React from 'react'
import Arcade from "./icon-arcade.svg";
import Advance from "./icon-advanced.svg";
import Pro from "./icon-pro.svg";
import Context from '../../../context/Contextuser';
import { useContext } from 'react';


function Item({value, Name,val}) {

  const {plan, setPlan ,amount,setAmount,amounts,setAmounts}=useContext(Context);

  const handleClick=()=>{
    setPlan(value);
    setAmount((prev)=>{setAmount(amount-prev+val)});
  }
  
  return (
    <div style={{height: "100px", width: "80px",border: "1px solid black",borderRadius: "5px",display: 'flex', flexDirection: "column", alignItems: "flex-start",justifyContent: 'space-between',cursor:"pointer"}} onClick={handleClick}>
        {Name=='Arcade'&&<img src={Arcade} height="30px" style={{padding:"2px 0 0 2px"}}></img>}
        {Name=='Advance'&&<img src={Advance} height="30px" style={{padding:"2px 0 0 2px"}}></img>}
        {Name=='Pro'&&<img src={Pro} height="30px" style={{padding:"2px 0 0 2px"}}></img>}
        <div style={{marginTop: "10px",padding:"2px 0 0 2px"}}>{value}</div>
        <p style={{padding:"2px 0 0 2px",fontSize: "smaller"}}>{`$${val}/mon`}</p>
    </div>
  )
}

export default Item