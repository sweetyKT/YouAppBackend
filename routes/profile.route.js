const express = require("express");
const router = express.Router();

const {
  displayProfiles,
  displayProfile,
  createProfile,
  updateProfile,
  removeProfile,
} = require("../controllers/profile.controller.js");

// Get all the profiles from the database
router.get("/", displayProfiles);

// Get a specific profile by its id
router.get("/:id", displayProfile);

// Create a profile
router.post("/", createProfile);

// Update a profile by its id
router.put("/:id", updateProfile);

// Remove a profile by its id
router.delete("/:id", removeProfile);

module.exports = router;
