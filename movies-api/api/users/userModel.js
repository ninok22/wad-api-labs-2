import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

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

// UserSchema.methods.comparePassword = function (candidatePassword) {
//   const isMatch = this.password === candidatePassword;
//   if (!isMatch) {
//     throw new Error('Password mismatch');
//   }
//   return this;
// };

// uses bcrypt to compare candidate password to the password 
// stored in the database
UserSchema.methods.comparePassword = function (passw, callback) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// to include a pre-save hook
UserSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, (err, salt)=> {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, (err, hash)=> {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

export default mongoose.model('User', UserSchema);