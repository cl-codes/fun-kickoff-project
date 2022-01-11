const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const timeRangeSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
})

const availabilitySchema = new mongoose.Schema({
  monday: [timeRangeSchema],
  tuesday: [timeRangeSchema],
  wednesday: [timeRangeSchema],
  thursday: [timeRangeSchema],
  friday: [timeRangeSchema],
  saturday: [timeRangeSchema],
  sunday: [timeRangeSchema],
})

const phoneNumberSchema = new mongoose.Schema({
  nickname: String,
  phoneNumber: {
    type: String,
    required: true
  }
})

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non-binary'],
    required: true,
  },
  birthDate: {
    type: Date,
    required: true
  },
  phoneNumber: [phoneNumberSchema],
  address: {
    type: String,
    required: true
  },
  description: String,
  profilePhotoUrl: String,
  availability: [availabilitySchema],

});

module.exports = Profile = mongoose.model("profile", profileSchema);
