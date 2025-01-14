const Profile = require("../models/profile.model.js");

// Display all the profiles
const displayProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({});
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Display a specific profile from the db
const displayProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a profile in the db
const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update profile parameters using its id
const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findByIdAndUpdate(id, req.body);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found!" });
    }

    const updatedProfile = await Profile.findById(id);
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a profile
const removeProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findByIdAndDelete(id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found!" });
    }

    res.status(200).json({ message: "Profile deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displayProfiles,
  displayProfile,
  createProfile,
  updateProfile,
  removeProfile,
};
