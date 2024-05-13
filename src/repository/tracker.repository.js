import ApplicationError from "../middleware/applicationError.js";
import Task from "../model/task.model.js";

class TrackerRepository {

  async saveTask(title, time) {
    try {
      const task = new Task({ title, time, days: { day: new Date().toISOString().slice(0, 16), status: 'NONE' } });
      const savedTask = await task.save();
      return savedTask;
    } catch (err) {
      throw new ApplicationError('Error in saving task: ' + err.message, 400);
    }
  }
  
  async getTasks() {
    try {
      const tasks = await Task.find();
      return tasks;
    } catch (err) {
      throw new ApplicationError('Error in getting tasks: ' + err.message, 400);
    }
  }

  async updateStatus(id, day, status) {
    try {
      const task = await Task.findById(id);
      task.days.forEach((item) => {
        if(item.day.toISOString().slice(0, 16) === day) {
          item.status = status;
        }
        return item;
      });
      await task.save();
      return task;
    } catch (err) {
      throw new ApplicationError('Error in updating status: ' + err.message, 400);
    }
  }
};

export default TrackerRepository;