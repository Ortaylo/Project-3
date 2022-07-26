import React, { useContext } from "react";
import { useQuery } from '@apollo/client';
import { AuthContext, useAuthContext } from "../context/authContext";
const {GET_USER} = require('../utils/queries')
export default function Profile(props) {
    if(!localStorage.getItem("token")){
        window.location.replace('/login')
    }
   const  {_id,email,username} = props.data
   console.log('Profile',props)
   const context = useAuthContext();
   const {data,loading,error} =useQuery(GET_USER,{variables: {username: 'TestUser'}})
   var messages;
   if(!loading){
    console.log('Profile2',data)
    messages = data.user.messages
   }
   
   
    
      return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {username}</h2>
            <h2>email: {email}</h2>
            {loading && (
                <h3>LOADING...</h3>
            )}
            {!loading && messages && 
                messages.map(message=>(
                <div>
                <h4>
                {message.sender}
                </h4>
                <h3>{message.messageText}</h3>
                </div>
            ))}
        </div>
    )
    
  
   
}