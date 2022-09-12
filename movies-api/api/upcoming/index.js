import express from 'express';
import Upcoming from './upcomingModel';


const router = express.Router(); 

router.get('/', async (req, res) => {
    const upcoming = await Upcoming.find();
    res.status(200).json(upcoming);
});

export default router;