import mongoose from 'mongoose';

  const Schema = mongoose.Schema;

  const GenreSchema = new Schema({
    id: { type: Number,  unique: true, required: true},
    name: {type: String, required: true },
    genres: [GenreSchema]
  });

  export default mongoose.model('Genre', GenreSchema);