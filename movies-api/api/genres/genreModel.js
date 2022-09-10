import mongoose from 'mongoose';


  const Schema = mongoose.Schema;

  const GenreSchema = new Schema({
    id: { type: Number,  unique: true, required: true},
    name: {type: String, required: true },
    // genres: [GenreSchema]
  });

  // GenreSchema.statics.findByGenreName = function (name) {
  //   return this.findOne({ name: name });
  // };

  export default mongoose.model('Genre', GenreSchema);