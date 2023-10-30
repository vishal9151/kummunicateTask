import React from 'react'
import ConfirmLogo from "./icon-thank-you.svg"

function Confirm() {
  return (
    <div style={{textAlign: 'center',marginTop: "100px"}}>
     <img src={ConfirmLogo}></img>   
    <div>
    Thank you!
  </div>
    <div>Thanks for confirming your subscription! We hope you have fun 
    using our platform. If you ever need support, please feel free 
    to email us at support@loremgaming.com.</div>
    </div>
  )
}

export default Confirm