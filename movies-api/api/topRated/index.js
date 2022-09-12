import express from 'express';
import TopRated from './topRatedModel';


const router = express.Router(); 

router.get('/', async (req, res) => {
    const topRated = await TopRated.find();
    res.status(200).json(topRated);
});

export default router;