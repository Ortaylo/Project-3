const { Schema, model } = require('mongoose');
const messageSchema = require('./Message');
const User = require('./User')
const chatSchema = new Schema ({
    users:[
      {
        type: String
      },
    ],
    messages:[messageSchema]
}
);

const Chat = model('Chat', chatSchema);

module.exports= {Chat,chatSchema};