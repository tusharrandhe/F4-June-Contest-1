import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  const handleBtnClick = () => {
    setSuccessText("");
    setErrorText("");
    if(name==="" || email==="" ||password==="" ||cnfPassword==="" ){
      setErrorText("Error : All fields are mandatory");
    }else if(name.trim().split(" ").length===1){
      setErrorText("Error : Please enter FullName");
    }else if(!email.includes("@")){
      setErrorText("Error : Please enter a valid email consisting of '@'");
    }else if(password!==cnfPassword){
      setErrorText("Error : Password mismatch");
    }else{
      setSuccessText("Signed Up Successfully !");
    }
    console.log(name,email,password,cnfPassword);
  };

  return (
    <div className="inner-container">
      <h1>SignUp</h1>
      <div className="fields">
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Full Name" />
        <input type="email"onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <input type="password" onChange={(e)=>setCnfPassword(e.target.value)}placeholder="Confirm Password" />
      </div>
      <div className="display">
        <span className="error">{errorText}</span>
        <span className="success">{successText}</span>
      </div>
      <button className="btn" onClick={handleBtnClick}>Signup</button>
    </div>
  );
}

export default Form;