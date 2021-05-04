const mongoose = require('mongoose');

const manufactureSchema = new mongoose.model({
  name: {
    type: String,
    required: true,
    maxlength: [50, 'name cannot exceede more than 50 characters']
  }
})

module.exports = mongoose.model('manufacturer', manufactureSchema);