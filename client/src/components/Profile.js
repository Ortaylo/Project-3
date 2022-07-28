import React, { useContext } from "react";
import { useQuery } from '@apollo/client';
import { AuthContext, useAuthContext } from "../context/authContext";
const {GET_USER} = require('../utils/queries')
export default function Profile(props) {
    if(!localStorage.getItem("token")){
        window.location.replace('/login')
    }
   const  {_id,email,username} = props.data
   const context = useAuthContext();
   const {data,loading,error} =useQuery(GET_USER,{variables: {username: username}})
   var messages;
   var messageArr = [];
   var chats = [];
   if(!loading){
    console.log('Profile2',data)
    messages = data.user.messages
    if(!messages){
        return
    }
    for(var i=0;i<messages.length;i++){
        var tempSender = messages[i].sender
        var tempReceiver = messages[i].receiver
        messageArr.push(tempSender,tempReceiver)
        
    }
    console.log(messageArr)
            messageArr = [...new Set(messageArr)]
    for(var i=0;i < messageArr.length;i++){
        if(messageArr[i] === username){
            messageArr.splice(i,1)
        }
        console.log('Final',messageArr)
    }
    for(var c=0;c < messageArr.length;c++){
        chats.push([])
    for(var i=0;i <messages.length;i++){
        if(messages[i].sender === messageArr[c]){
            chats[c].push(messages[i])
        }
        if(messages[i].receiver === messageArr[c]){
            chats[c].push(messages[i])
        }
        
    }
    }
    console.log('Final',chats)
   }
   
   function whatChat(chat){
    if(chat[0].sender == username){
        return chat[0].receiver
    } else {
        return chat[0].sender
    }
   }
   const revealChat = (event) => {
    var children = event.target.children
    for(var i=0;i<children.length;i++){
        if(children[i].className === 'hidden'){
            children[i].setAttribute('class','chatMessage')
        } else if (children[i].className === 'chatMessage') {
            // children[i].setClass()
            children[i].setAttribute('class','hidden')
        }
        console.log(children[i])
    }
   }
      return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {username}</h2>
            <h2>email: {email}</h2>
            {loading && (
                <h3>LOADING...</h3>
            )}

            <aside className="Chats">
            {!loading && messages && 
                chats.map(chat=>(
                    <div onClick={revealChat} className="Chat">
                        {whatChat(chat)}
                    {chat && chat.map(message=>(
                        <div className="hidden">
                        <h4 className="sender">{message.sender}</h4>
                        <h3 className="messageText">{message.messageText}</h3>
                        </div>
                    ))}
                    </div>
            ))}
            </aside>
        </div>
    )
    
  
   
}