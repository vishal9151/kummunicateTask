import React, { useContext, useEffect } from 'react';
import Header from '../Right/Header';
import Footer from '../Right/Footer';
import Context from '../../../context/Contextuser';

function AddOnsPage() {
  const { monthly, setMonthly, yearly, setYearly, check1, setCheck1, check2, setCheck2, check3, setCheck3, amount, setAmount } = useContext(Context);

  // Calculate the total amount based on selected checkboxes and billing cycle
  useEffect(() => {
    let totalAmount = 0;
    if (check1) totalAmount += monthly ? 1 : 10;
    if (check2) totalAmount += monthly ? 2 : 20;
    if (check3) totalAmount += monthly ? 2 : 20;
    setAmount(amount + totalAmount);
  }, [check1, check2, check3, monthly, yearly]);

  const labelStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    background: 'lightblue',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <Header value1="Pick add-ons" value2="Add-ons help enhance your gaming experience." />
      <div style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '20px' }}>
        <div style={labelStyle}>
          <label>
            Online service
            <br />
            Access to multiplayer games
            <br />
            {monthly ? '+$1/mo' : '+$10/yr'}
          </label>
          <button style={buttonStyle} onClick={() => setCheck1(!check1)}>
            {check1 ? 'Remove' : 'Add'}
          </button>
        </div>

        <div style={labelStyle}>
          <label>
            Larger storage
            <br />
            Extra 1TB of cloud save
            <br />
            {monthly ? '+$2/mo' : '+$20/yr'}
          </label>
          <button style={buttonStyle} onClick={() => setCheck2(!check2)}>
            {check2 ? 'Remove' : 'Add'}
          </button>
        </div>

        <div style={labelStyle}>
          <label>
            Customizable Profile
            <br />
            Custom theme on your profile
            <br />
            {monthly ? '+$2/mo' : '+$20/yr'}
          </label>
          <button style={buttonStyle} onClick={() => setCheck3(!check3)}>
            {check3 ? 'Remove' : 'Add'}
          </button>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default AddOnsPage;
