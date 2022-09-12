import express from 'express';
import Popular from './popularModel';


const router = express.Router(); 

router.get('/', async (req, res) => {
    const popular = await Popular.find();
    res.status(200).json(popular);
});

export default router;