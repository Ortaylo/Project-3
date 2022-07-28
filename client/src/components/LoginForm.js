import React, { useContext, useState } from "react";

import { LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { AuthContext, useAuthContext } from "../context/authContext";

export default function LoginForm() {
  const [login,{data,loading,error}] = useMutation(LOGIN)
  const [userData,setUserData] = useState({email: '', password: ''})
  const [Auth,setAuth] =useState(false)
  const context = useAuthContext();
  if(localStorage.getItem("token")){
    window.location.replace('/profile')
  }
  const handleChange = (e) => {
    e.preventDefault();

    const {name,value} = e.target;
    setUserData({...userData,[name] : value})
    console.log(context)
    
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const {email,password} = userData
    
    if (email && password){
      const loggedIn = await login({variables:{email: email, password: password}});
      if(!loading){
        
        if(error){
          console.log(error)
        }
        const userData = loggedIn.data.login
        if(loggedIn){
          context.login(userData)
          console.log('loggenIn',context.user)
        }
      }
    }
  }

  if(loading){
    return <h2>LOADING...</h2>
  }
  return(
    
    <form>
      <button>TEST</button>
      EMAIL<input name="email" value={userData.email} onChange={handleChange}></input>
      PASSWORD<input name="password" value={userData.password} onChange={handleChange}></input>

      <button onClick={handleFormSubmit}>Login</button>
      <a href="/signup">Need to sign up?</a>
    </form>
  )
}