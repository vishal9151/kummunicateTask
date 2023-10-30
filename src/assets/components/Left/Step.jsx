import React, { useContext } from "react";
import Context from "../../../context/Contextuser";

function Step({ coun, value }) {
  const { count } = useContext(Context);
  return (
    <>
      {count == Number(coun) ? (
        <div
          className="step"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "10px",
            color: "white",
          }}
        >
          <div
            className="step-count"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid white",
              color: "black",
              borderRadius: "50%",
              marginRight: "10px",
              backgroundColor: "white",
            }}
          >
            {coun}
          </div>
          <div
            className="step-2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div>STEP {coun}</div>
            <div>{value}</div>
          </div>
        </div>
      ) : (
        <div
          className="step"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "10px",
            color: "white",
          }}
        >
          <div
            className="step-count"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid white",
              color: "white",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          >
            {coun}
          </div>
          <div
            className="step-2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div>STEP {coun}</div>
            <div>{value}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Step;
