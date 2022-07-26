const { AuthenticationError } = require('apollo-server-express');
const User = require('../models')
const {signToken} = require('../utils/auth')
const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, {username}) => {
            console.log(User.findOne({username}))
            return User.findOne({username})
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)
            const user = await User.create(args);
            return user
        },
        removeUser: async (parent, {username}) => {
            return User.remove({username: username})
        },
        login: async (parent, {email,password}) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials: No User');
              }
            const correctPw = await user.isCorrectPassword(password) 

            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials: Wrong Password')
            }
            const token = signToken(user)
            console.log(token)
            console.log(correctPw)
            return {token,user};

        },
        sendMessage: async (parent, {sender,receiver,messageText}) => {
            
            const user = await User.findOneAndUpdate(
                { username: receiver },
                { $push: { messages: { sender: sender,receiver: receiver, messageText:messageText } } },
                { new: true }
              );
              await User.findOneAndUpdate(
                { username: sender },
                { $push: { messages: { sender:sender,receiver: receiver, messageText:messageText } } }
              )
            if (!user) {
                throw new AuthenticationError('Incorrect credentials: No User Found');
              }
              console.log(user)
              return user
            
              

        },
        removeMessage: async (parent,{username,messageId}) => {
            const user = await User.findOneAndUpdate(
                {username: username},
                {$pull: {messages: {_id: messageId}}},
                {new: true}
            )
                return user
        }
    }
}

module.exports = resolvers;
