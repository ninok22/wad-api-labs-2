import passport from 'passport';
import passportJWT from 'passport-jwt';
import UserModel from './../api/users/userModel';
import dotenv from 'dotenv';


/* extracts the user from the token in the request (the payload) and 
    verifies it is a valid username. The user id is then passed on to 
    the next middleware, accessible through the request object */
dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET;
const strategy = new JWTStrategy(jwtOptions, async (payload, next) => {
  const user = await UserModel.findByUserName(payload);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

export default passport;