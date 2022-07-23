const { AuthenticationError } = require('apollo-server-express');
const User = require('../models')
const {signToken} = require('../utils/auth')
const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, {username}) => {
            console.log(User.findOne({username}).select('-__v -password'))
            return User.findOne({username}).select('-__v -password');
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

        }
    }
}

module.exports = resolvers;
