const mongoose = require('mongoose');

var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const Schema = {
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  password: { type: String }
}
const userProfile = new mongoose.Schema(Schema);

//HASH THE PASSWORD
userProfile.pre('save', function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
  });
});


userProfile.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

let userProfileSchema = mongoose.model('collectionName', userProfile);

module.exports = userProfileSchema;
