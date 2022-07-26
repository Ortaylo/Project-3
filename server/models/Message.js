const { Schema, model } = require('mongoose');
const messageSchema = new Schema ({
    sender: {
        type: String
    },
    receiver:{
        type: String
    },
    messageText: {
        type: String,
        required: true
    },
    createdAt:{
      type: Date,
      default: Date.now,
    }
}
);


module.exports= messageSchema;