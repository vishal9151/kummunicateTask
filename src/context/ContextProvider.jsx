import { useState } from "react";
import Context from "./Contextuser";

const ContextProvider=({children})=>{

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");
    const [monthly, setMonthly]=useState(true);
    const [yearly, setYearly]=useState(false);
    const [plan,setPlan]=useState("Arcade");
    const [amount, setAmount]=useState(9);
    const [check1, setCheck1]=useState(false);
    const [check2, setCheck2]=useState(false);
    const [check3, setCheck3]=useState(false);
    const [amounts, setAmounts]=useState(0);
    const [count,setCount]=useState(1);

    return (
        <Context.Provider value={{name,setName,email,setEmail,phone,setPhone,monthly,setMonthly,yearly,setYearly,plan,setPlan,check2,check3 ,amount, setAmount, check1, setCheck1, setCheck2,  setCheck3,count,setCount,amounts,setAmounts}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;