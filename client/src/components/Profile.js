import React, { useContext,useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { AuthContext, useAuthContext } from "../context/authContext";
const {GET_USER} = require('../utils/queries')
const {SEND_MESSAGE} = require('../utils/mutations')
export default function Profile(props) {
    const [sendMessage,{messageData}] = useMutation(SEND_MESSAGE)
    const [messageFormData,setMessageFormData] = useState({receiver: '', messageText: ''})
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
    // console.log(messageArr)
            messageArr = [...new Set(messageArr)]
    for(var i=0;i < messageArr.length;i++){
        if(messageArr[i] === username){
            messageArr.splice(i,1)
        }
        // console.log('Final',messageArr)
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
        // console.log(children[i])
    }
   }
   const sendAMessage = async (event) => {
    event.preventDefault()
    console.log(messageFormData)
    const newMessage = await sendMessage({variables: {sender:username,receiver:messageFormData.receiver,messageText:messageFormData.messageText}})
    console.log(newMessage)
   }
   const handleChange = (e) => {
    e.preventDefault();
    const {name,value} = e.target;
    setMessageFormData({...messageFormData,[name] : value})
    
  }
      return (
        <div>
          <div className="profile-info">
            <h2>Welcome {username}</h2>
            <h2>{email}</h2>
            {loading && (
                <h3>LOADING...</h3>
            )}
          </div>

            <div className="chatbox">
            {!loading && messages && 
                chats.map(chat=>(
                    <div onClick={revealChat} key={chat[0]._id + "3"} id="chat">
                        {whatChat(chat)}
                    {chat && chat.map(message=>(
                        <div className="hidden"key={message._id}>
                        <p className="sender">{message.sender}</p>
                        <p className="messageText">{message.messageText}</p>
                        </div>
                    ))}
                    
                    </div>

            ))}
            </div>
            <form className="messageForm">
            receiver:<input name="receiver" defaultValue={messageFormData.receiver} onBlur={handleChange}></input>
            Message:<textarea name="messageText" className="messageTextArea" defaultValue={messageFormData.messageText} onBlur={handleChange}></textarea>
                    <button onClick={sendAMessage} className='messageBtn'>Send Message</button>
            </form>
        </div>
    )
    
  
   
}