const mongoose = require('mongoose')
const { Schema } = mongoose
const roomSchema = Schema({
  name: String,
  capacity: { type: Number, default: 50 },
  floor: Number,
  building: { type: Schema.Types.ObjectId, ref: 'Building' }
})

module.exports = mongoose.model('Room', roomSchema)
