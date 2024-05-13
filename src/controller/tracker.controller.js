import TrackerRepository from "../repository/tracker.repository.js";

class TrackerController{
  constructor(){
    this.trackerRepository = new TrackerRepository();
  }

  getDateList(){
    const dateList = [];
    let curr = new Date();
    for(let i = 0; i < 7; i++){
      const newDate = new Date(curr);
      newDate.setDate(curr.getDate() + (i - 6));
      const currDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()} ${newDate.toString().split(' ')[0]}`;
      dateList.push(currDate);
    }
    return dateList;
  }

  async getDetail(req, res, next){
    try {
      const tasks = await this.trackerRepository.getTasks();
      return res.render('detail', { tasks });
    } catch (err) {
      next(err);
    }
  }

  async getCalender(req, res, next){
    try {
      const tasks = await this.trackerRepository.getTasks();
      const dateList = this.getDateList();
      return res.render('calender', { dateList, tasks });
    } catch (err) {
      next(err);
    }
  }

  async saveDetail(req, res, next){
    try {
      const { title, time } = req.body;
      await this.trackerRepository.saveTask(title, time);
      const tasks = await this.trackerRepository.getTasks();
      return res.render('detail', { tasks });
    } catch (err) {
      next(err);
    }
  }

  async updateStatus(req, res, next){
    try {
      const { id } = req.params;
      const { status, day } = req.body;
      console.log(id, status, day);
      await this.trackerRepository.updateStatus(id, day, status);
      const tasks = await this.trackerRepository.getTasks();
      return res.render('detail', { tasks });
    } catch (err) {
      next(err);
    }
  }
};

export default TrackerController;