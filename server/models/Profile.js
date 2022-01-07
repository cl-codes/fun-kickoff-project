const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const dailyAvailabilitySchema = new mongoose.Schema({
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
  monday: [dailyAvailabilitySchema],
  tuesday: [dailyAvailabilitySchema],
  wednesday: [dailyAvailabilitySchema],
  thursday: [dailyAvailabilitySchema],
  friday: [dailyAvailabilitySchema],
  saturday: [dailyAvailabilitySchema],
  sunday: [dailyAvailabilitySchema],
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
