import express from 'express';
import { genres } from './genresData';
import genreModel from './genreModel';
import asyncHandler from 'express-async-handler'; // NEW


const router = express.Router(); 

// router.get('/', (req, res) => {
//     res.json(genres);
// });

// router.get('/', asyncHandler(async (req, res) => { // NEW    
router.get('/', async (req, res) => { 
    // const genres = await genreModel.find();
    const genres = await genres.find();
    res.status(200).json(genres);
});

export default router;