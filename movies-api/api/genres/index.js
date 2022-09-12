import express from 'express';
import Genre from './genreModel';



const router = express.Router(); 

router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// // router.get('/', asyncHandler(async (req, res) => { // NEW    
// router.get('/', async (req, res) => { 
//     // const genres = await genreModel.find();
//     const genres = await genres.find();
//     res.status(200).json(genres);
// });

export default router;