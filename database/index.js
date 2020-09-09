const mongoose = require('mongoose');
const debug = require('debug')('todo:app');
mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://bmh-user:passw0rd@test-cluster.5bjel.mongodb.net/random-data?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

debug(process.env.DATABASE_URL); 
const TodoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  createdAt: Date
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = { mongoose, Todo };