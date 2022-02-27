const mongoose = require('mongoose')
const { Schema } = mongoose
const buildingSchema = Schema({
  name: { type: String },
  floor: Number,
  rooms: [{ type: Schema.Types.ObjectId, ref: 'Room', default: [] }]
})

module.exports = mongoose.model('Building', buildingSchema)
