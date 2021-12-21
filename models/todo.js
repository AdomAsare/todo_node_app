const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isCompleted: Boolean,
    deadline:Date,
}, {timestamp:true});

const todo= mongoose.model('todo', todoSchema);
module.exports=todo