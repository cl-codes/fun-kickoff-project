const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @route POST /profile/new
// @desc Create profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const { username, firstName, lastName, gender, birthDate, address, description, profilePhotoUrl} = req.body;
  const user = await User.findOne({ username });
  
  const profile = await Profile.create({
    user: user,
    username, 
    firstName, 
    lastName, 
    gender, 
    birthDate,
    address,
    description,
    profilePhotoUrl,
  });

  if (profile) {
    res.status(201).json({
      success: true,
      data: {
        profile: {
          user: profile.user,
          username: profile.username,
          firstName: profile.firstName,
          lastName: profile.lastName,
          gender: profile.gender,
          birthDate: profile.birthDate,
          address: profile.address,
          description: profile.description,
          profilePhotoUrl: profile.profilePhotoUrl,
        }
      }
    });
  } else {
    res.status(400);
    throw new Error("Invalid profile data");
  }
});

// @route POST /profile/update
// @desc Update profile
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const { username, firstName, lastName, gender, birthDate, address, description, profilePhotoUrl} = req.body;
  const user = await User.findOne({ username });

  const replacement = {
    user: user._id,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthDate: birthDate,
    address: address,
    description: description,
    profilePhotoUrl: profilePhotoUrl,
  };

  const profile = await Profile.findOneAndUpdate({user}, replacement);

  if (profile) {
    res.status(201).json({
      success: {
        replacement
      }
    });
  } else {
    res.status(400);
    throw new Error("Not a valid profile");
  }
});


// @route GET /profile
// @desc Get profile using profile id
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.query.id);

  if (!profile) {
    res.status(401);
    throw new Error("No profile found");
  }
  
  res.status(200).json({
    success: {
      profile: {
        user: profile.user,
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        birthDate: profile.birthDate,
        address: profile.address,
        description: profile.description,
        profilePhotoUrl: profile.profilePhotoUrl,
      }
    }
  });
});

// @route GET /allprofiles
// @desc Get all profiles
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const result = await Profile.find();
  
  if (!result) {
    res.status(200).json(
      []
    );
  } else {
    res.status(200).json({
      success: {
        result
        }
      }
    );
  }
});