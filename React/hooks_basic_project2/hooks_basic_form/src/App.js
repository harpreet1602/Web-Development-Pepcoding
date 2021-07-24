import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Display from "./Display.jsx";

function App() {
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [phone,setPhone] = useState("");
  let [theme,setTheme] = useState("light");


  useEffect(()=>{
    alert("theme has been changed")
  },[theme]);
// jab bhi dependency array ka theme change hoga to ye beech vala chalega 
//case 3 of hooks 

  return (
    <div className="my-container">
      
  <Display name={name} email={email} phone={phone} theme={theme}/>
  <Form 
  theme={theme} 
  handleName = {setName}
  handleEmail = {setEmail}
  handlePhone = {setPhone}
  handleTheme = {setTheme}  
  />  
  </div>
  );
}

export default App;
