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

/* code includes static method to find a user by userName 
   and an instance method comparePassword that allows a simple 
   password comparison. */

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.methods.comparePassword = function (candidatePassword) {
  const isMatch = this.password === candidatePassword;
  if (!isMatch) {
    throw new Error('Password mismatch');
  }
  return this;
};

export default mongoose.model('User', UserSchema);