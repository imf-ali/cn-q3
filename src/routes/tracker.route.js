import express from 'express';
import TrackerController from '../controller/tracker.controller.js';

const router = express.Router();
const trackerController = new TrackerController();

router.get('/detail', (req, res, next) => {
  trackerController.getDetail(req, res, next);
});

router.get('/calender', (req, res, next) => {
  trackerController.getCalender(req, res, next);
});

router.post('/detail', (req, res, next) => {
  trackerController.saveDetail(req, res, next);
});

router.post('/update/:id', (req, res, next) => {
  trackerController.updateStatus(req, res, next);
});

export default router;