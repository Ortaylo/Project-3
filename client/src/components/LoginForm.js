import React, { useState } from "react";

import { LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
export default function LoginForm() {
  const [login,{data,loading,error}] = useMutation(LOGIN)
  const [userData,setUserData] = useState({email: '', password: ''})
  const [Auth,setAuth] =useState(false)
  const handleChange = (e) => {
    const {name,value} = e.target;
    setUserData({...userData,[name] : value})
    console.log(userData)
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = userData
    if (email && password){
      const loggedIn = await login({variables:{email: email, password: password}});
      if(!loading){
        // setAuth(test)
        console.log(loggedIn);
        console.log(loggedIn.data.login)
        if(loggedIn){
          setAuth(true)
        }
      }
    }
    
  }
  return(
    
    <form>
      EMAIL<input name="email" value={userData.email} onChange={handleChange}></input>
      PASSWORD<input name="password" value={userData.password} onChange={handleChange}></input>

      <button onClick={handleFormSubmit}>Login</button>
      {Auth && (
        <h1>LOGGED IN</h1>
      )}
    </form>
  )
}