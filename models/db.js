const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:wFCCYA7W82PzY2N@cluster0.rsc5keo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => { throw err })
