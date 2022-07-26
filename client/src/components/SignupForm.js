import React, { useState } from "react";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
export default function LoginForm() {
  const [addUser,{data,loading,error}] = useMutation(ADD_USER)
  const [userData,setUserData] = useState({username: '', email: '', password: ''})
  const [Auth,setAuth] =useState(false)
  const handleChange = (e) => {
    const {name,value} = e.target;
    setUserData({...userData,[name] : value})
    console.log(userData)
    
  }
  const handleFormSubmit = async () => {
    const {username,email,password} = userData
    if (username && email && password){
      const newUser = await addUser({variables:{username: username,email: email, password: password}})
      if(!loading){
        console.log(newUser)
      }
    }
    
  }
  return(
    
    <form>
      USER<input name="username" value={userData.username} onChange={handleChange}></input>
      EMAIL<input name="email" value={userData.email} onChange={handleChange}></input>
      PASSWORD<input name="password" value={userData.password} onChange={handleChange}></input>
      <button onClick={handleFormSubmit}>Signup</button>
    </form>
  )
}