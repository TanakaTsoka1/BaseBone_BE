const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:basebone@cluster0.rsc5keo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => { throw err })
