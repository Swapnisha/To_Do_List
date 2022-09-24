const mongoose = require('mongoose');
// defining schema for task document in our db
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    }

});
// compiling the schema
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;