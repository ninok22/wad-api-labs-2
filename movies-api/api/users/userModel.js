import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Schema is a constructor function provided 
// by Mongoose for creating schema instances 
//(in this case, UserSchema)

const MovieSchema = new Schema({
  id: Number,
  title: String
});

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  // an array of favourites that reference Movies
  // --- POST Favorites ---
  favourites: [MovieSchema]
});

export default mongoose.model('User', UserSchema);