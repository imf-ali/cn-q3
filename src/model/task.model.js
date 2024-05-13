import mongoose from "mongoose";

const task = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  days: [{
    day: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  }]
});

const Task = mongoose.model('Task', task);

export default Task;