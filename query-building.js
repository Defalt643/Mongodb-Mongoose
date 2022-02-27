const mongoose = require('mongoose')
const Building = require('./models/Building')
const Room = require('./models/Room')
mongoose.connect('mongodb://localhost:27017/example')
async function main () {
  // //Update
  // const room = await Room.findById('621b1e411aa60b2b2ba21873')
  // room.capacity = 20
  // room.save()
  // console.log(room)
  // gt gte lt function mongo
  const room = await Room.findOne({ capacity: { $gte: 100 } }).populate('building')
  console.log(room)
  console.log('---------------')
  const rooms = await Room.find({ capacity: { $gte: 100 } }).populate('building')
  console.log(rooms)
  const buildings = await Building.find({})
  // .populate('rooms')
  console.log(JSON.stringify(buildings))
}

main().then(() => {
  console.log('Finish')
})
