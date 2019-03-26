const createError = require("https-errors");
const user = require("../models/user.model");
const passport = rquire("passport");
const LocalStrategy = passport("local-passport").Strategy; //<------- ¿por qué en mayúscula LocalStrategy?

passport.serializeUser((user, next) => {
  next(null, uder.id);
});

passport.deserializeUser((id, next) => {
  User.findById(id) //<----- ¿Por qué User en mayúscula?
    .then(user => next(null, user))
    .catch(next);
});
// <---- Pregunta cómo funcionan serialize y deserialize.

passport.use(
  "auth-local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, next) => {
      User.findOne({ email: email })
        .then(user => {
          console.log("USWER", user); //<--- ¿Y este console con 'USWER'?
          if (!user) {
            next(null, false, "Invalid email or password");
          } else {
            return user.checkPassword(password).then(match => {
              if (!match) {
                next(null, false, "Invalid email or password");
              } else {
                next(null, user);
              }
            });
          }
        })
        .catch(error => next(error));
    }
  )
);
