import express from 'express';
import { genres } from './genresData';
// NEW
// // import uniqid from 'uniqid';
// import genreModel from './genreModel'; // NEW
// import asyncHandler from 'express-async-handler'; // NEW

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(genres);
});

// router.get('/', asyncHandler(async (req, res) => { // NEW
//     const genres = await genreModel.find();
//     res.status(200).json(genres);
// }));

// router.get('/:id', asyncHandler(async (req, res) => { // NEW
//     const id = parseInt(req.params.id);
//     const genre = await genreModel.findByGenreDBId(id);
//     if (genre) {
//         res.status(200).json(genre);
//     } else {
//         res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
//     }
// }));

export default router;