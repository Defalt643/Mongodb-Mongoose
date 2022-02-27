const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')

const kittySchema = new mongoose.Schema({
  name: String
})
kittySchema.methods.speak = function speak () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name"
  console.log(greeting)
}

const Kitten = mongoose.model('Kitten', kittySchema)
const silence = new Kitten({ name: 'Silence' })
console.log(silence.name)
console.log(silence)
silence.speak()
// Promise
silence.save().then(function (result) {
  console.log(result)
}).catch(function (err) {
  console.log(err)
})
// Call back
const fluffy = new Kitten({ name: 'fluffy' })
fluffy.speak()
fluffy.save(function (err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})

async function saveCat (name) {
  const cat = new Kitten({ name: name })
  try {
    const result = await cat.save()
    console.log(result)
    return result
  } catch (e) {
    console.log(e)
  }
}

saveCat('Ta').then((result) => {
  console.log(result)
})
