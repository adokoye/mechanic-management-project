const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const customerSchema = require('./Customer')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
      trim: true, 
    },
    password: {
      type: String,
      required: true,
      minlength: 12,
      trim: true,
    },
    savedCustomers: {
     type: {customerSchema}
    },
    customers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `customerCount` with the number of saved users/customers we have
userSchema.virtual('customerCount').get(function () {
  return this.savedCustomers.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;