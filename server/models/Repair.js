const mongoose = require('mongoose');
const { Schema } = mongoose;

const repairSchema = new Schema({
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    parts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Part'
      }
    ]
  });
  
  const Repair = mongoose.model('Repair', repairSchema);
  
  module.exports = Repair;