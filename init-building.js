const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')
const Room = require('./models/Room')
const Building = require('./models/Building.js')

async function clearDb () {
  await Room.deleteMany({})
  await Building.deleteMany({})
}

async function main () {
  await clearDb()
  const informaticsBuilding = new Building({ namme: 'Informatics', floor: 11 })
  const newInformaticsBuilding = new Building({ name: 'New Informatics', floor: 20 })
  const room3c01 = new Room({ name: '3c01', capacity: 200, floor: 3, building: informaticsBuilding })
  informaticsBuilding.rooms.push(room3c01)
  const room4c01 = new Room({ name: '4c01', capacity: 150, floor: 4, building: informaticsBuilding })
  informaticsBuilding.rooms.push(room4c01)
  const room5c01 = new Room({ name: '5c01', capacity: 100, floor: 5, building: informaticsBuilding })
  informaticsBuilding.rooms.push(room5c01)
  await informaticsBuilding.save()
  await newInformaticsBuilding.save()
  await room3c01.save()
  await room4c01.save()
  await room5c01.save()
}

main().then(function () {
  console.log('Finish')
})
