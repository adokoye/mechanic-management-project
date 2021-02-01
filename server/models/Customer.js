const mongoose = require('mongoose');
const { Schema } = mongoose;
const Repair = require('./Repair');

const customerSchema = new Schema({
  firstName:{
    type: String,
    required: true,
    trim: true, 
  },
  lastName: {
    type: String,
    required: true,
    trim: true, 
  },
  cellPhone: {
    type: String,
    required: true,
    trim: true, 
  },
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true, 
  },
  color: {
    type: String,
    required: true,
    trim: true, 
  },
  repair: {
    type: Number,
    trim: true, 
    min: 0, 
    default: 0,  
  },
  repairs: [Repair.schema]
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;