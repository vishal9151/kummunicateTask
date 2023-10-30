import React from 'react';
import Desktop from './bg-sidebar-desktop.svg';
import './Left.css';
import Step from './Step';

function Left() {
  return (
    <div
      className='left-container'
      style={{
        backgroundImage: `url(${Desktop})`,
        // backgroundSize: 'cover', // This will make the image cover the entire element
        backgroundRepeat: 'no-repeat', // This will prevent image repetition
        width: "300px",
        margin: "10px 10px 5px 10px"
      }}
    >
      <div className='inner' style={{width: "200px",margin: "auto",marginTop: "20px", textAlign: "center"}}>
        <Step coun="1" value="YOUR INFO" />
        <Step coun="2" value="SELECT PLAN"/>
        <Step coun="3" value="ADD-ONS"/>
        <Step coun="4" value="SUMMARY"/>
      </div>
    </div>
  );
}

export default Left;
