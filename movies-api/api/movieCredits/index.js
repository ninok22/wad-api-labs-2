import express from 'express';
import MovieCredits from './movieCreditsModel';


const router = express.Router(); 

router.get('/:id', async (req, res) => {
    const movieCredits = await MovieCredits.find();
    res.status(200).json(movieCredits);
});

export default router;