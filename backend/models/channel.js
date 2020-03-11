const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
  title:{ type: String, required: true },
  description:{ type: String, required: true },
  instructorName:{ type: String, required: true },
  instructorPhotoUrl:{ type: String },
  subjectPhotoUrl:{ type: String },
  time:{ type: String, required: true }
});

module.exports = mongoose.model('Channel', channelSchema);