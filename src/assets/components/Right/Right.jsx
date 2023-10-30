import React from 'react'
import First from '../Pages/First'
import SecondPage from '../Pages/SecondPage'
import { useContext } from 'react'
import Context from '../../../context/Contextuser'
// import Third from '../Pages/Third'
import AddOnsPage from '../Pages/Third'
import FinishingPage from '../Pages/Fourth'
import Confirm from '../Pages/Confirm'
function Right() {
  const {count}=useContext(Context);
  // console.log(val);
  return (
    <div className='right' style={{margin: "10px 10px 10px 0px", width: "400px"}}>
        {count==1&&<First/>}
        {count==2&&<SecondPage/>}
        {count==3&&<AddOnsPage/>}
        {count==4&&<FinishingPage/>}
        {count==5&&<Confirm/>}
    </div>
  )
}

export default Right