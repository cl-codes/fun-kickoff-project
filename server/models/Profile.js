const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const paymentSchema = new mongoose.Schema({
  card_nickname: {
    type: String,
    required: true,
  },
  credit_card_number: {
    type: String,
    match: '[0-9]{16}',
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
  cardholder_name: {
    type: String,
    required: true,
  },
  card_type: {
    type: String,
    enum: ['Visa', 'Mastercard', 'Amex',],
    required: true,
  },
})

const availabilitySchema = new mongoose.Schema({
  calendar_date: {
    type: Date,
    required: true,
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
})

const phoneNumberSchema = new mongoose.Schema({
  nickname: String,
  phone_number: {
    type: String,
    required: true
  }
})

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non-binary'],
    required: true,
  },
  birth_date: {
    type: Date,
    required: true
  },
  phone_number: [phoneNumberSchema],
  address: {
    type: String,
    required: true
  },
  description: String,
  profile_photo_url: String,
  payment_methods: [paymentSchema],
  availability: [availabilitySchema],

});

module.exports = Profile = mongoose.model("profile", profileSchema);
