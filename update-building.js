const mongoose = require('mongoose')
const Building = require('./models/Building')
const Room = require('./models/Room')
mongoose.connect('mongodb://localhost:27017/example')
async function main () {
  const newInformaticsBuilding = await Building.findById('621b420c918abf5cf3aec8e5')
  const room = await Room.findById('621b420c918abf5cf3aec8ea')
  const informaticsBuilding = await Building.findById(room.building)
  console.log(newInformaticsBuilding)
  console.log(room)
  console.log(informaticsBuilding)
  room.building = newInformaticsBuilding
  newInformaticsBuilding.rooms.push(room)
  informaticsBuilding.rooms.push(room)
  room.save()
  newInformaticsBuilding.save()
  informaticsBuilding.save()
}

main().then(() => {
  console.log('Finish')
})
