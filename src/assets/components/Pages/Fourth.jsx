import React, { useContext } from 'react';
import Header from '../Right/Header';
import Footer from '../Right/Footer';
import Context from '../../../context/Contextuser';

function FinishingPage() {
  const { monthly, plan, amount,count,setCount } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  return (
    <div>
      <Header value1="Finishing up" value2="Double-check everything looks OK before confirming." />

      <div style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '20px' }}>
        <p>Subscription: {plan}</p>
        <p>Total ({monthly ? 'per month' : 'per year'}): ${amount}</p>
      </div>

      <Footer/>
    </div>
  );
}

export default FinishingPage;
