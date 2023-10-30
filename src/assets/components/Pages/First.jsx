import React, { useContext, useRef } from "react";
import Header from "../Right/Header";
import Footer from "../Right/Footer";
import Context from "../../../context/Contextuser";

function First() {
  const { name, setName, email, setEmail, phone, setPhone, count, setCount } = useContext(Context);
  const Name = useRef(name);
  const Email = useRef(email);
  const Phone = useRef(phone);

  const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input fields
    if (Name.current.value && isEmailValid(Email.current.value) && Phone.current.value) {
      // If all fields are valid, update the context and proceed to the next step
      setName(Name.current.value);
      setEmail(Email.current.value);
      setPhone(Phone.current.value);
      setCount(count + 1);
    } else {
      // If any field is empty or email is not in a valid format, show an alert or error message to the user
      alert("Please fill in all fields and provide a valid email address.");
    }
  };

  return (
    <div>
      <Header value1="Personal info" value2="Please provide your name, email address, and phone number." />
      <div style={{ marginLeft: "40px", marginBottom: "20px" }}>
        <form action="" onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            defaultValue={name}
            placeholder={name}
            ref={Name}
            required
            style={{ marginBottom: "10px", width: "80%", height: "30px" }}
          />
          <br></br>
          <label>Email Address</label>
          <br />
          <input
            type="text"
            defaultValue={email}
            placeholder={email}
            ref={Email}
            required
            style={{ marginBottom: "10px", width: "80%", height: "30px" }}
          />
          <br></br>
          <label>Phone Number</label>
          <br />
          <input
            type="text"
            defaultValue={phone}
            placeholder={phone}
            ref={Phone}
            required
            style={{ marginBottom: "10px", width: "80%", height: "30px" }}
          />
          <br></br>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto" }}>
        {count > 1 && <button onClick={() => setCount(count - 1)}>Go Back</button>}
        {count <= 4 && (
          <button onClick={handleSubmit} type="submit">
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}

export default First;
