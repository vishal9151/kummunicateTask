import React from 'react';
import Header from '../Right/Header';
import Footer from '../Right/Footer';
import Item from './Item';
import Context from '../../../context/Contextuser';
import { useContext } from 'react';

function SecondPage() {
  const { monthly, setMonthly, setCount, count } = useContext(Context);

  const toggleButtonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100px',
    margin: '60px auto',
  };

  const buttonStyle = {
    flex: '1',
    backgroundColor: monthly ? '#ccc' : '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <Header value1="Select your plan" value2="You have the option of monthly or yearly billing." />
      <div style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {monthly && (
          <>
            <Item value="Arcade" Name="Arcade" val={9} />
            <Item value="Advance" Name="Advance" val={12} />
            <Item value="Pro" Name="Pro" val={15} />
          </>
        )}

        {!monthly && (
          <>
            <Item value="Arcade" Name="Arcade" val={90} />
            <Item value="Advance" Name="Advance" val={120} />
            <Item value="Pro" Name="Pro" val={150} />
          </>
        )}
      </div>
      <div style={toggleButtonStyle}>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: monthly ? '#ccc' : '#007bff',
          }}
          onClick={() => setMonthly(true)}
        >
          Monthly
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: !monthly ? '#ccc' : '#007bff',
          }}
          onClick={() => setMonthly(false)}
        >
          Yearly
        </button>
      </div>
      <Footer handleSubmit={handleSubmit} />
    </div>
  );
}

export default SecondPage;
