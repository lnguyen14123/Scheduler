const mongoose = require('mongoose');

let ReminderSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  notes:{
    type: String,
    default: 'add notes here!'
  },
  remindDate:{
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Reminder', ReminderSchema);