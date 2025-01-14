const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: [true, "Please enter the name"],
    },

    dateOfBirth: {
      type: Date, // Format: "YYYY-mm-dd"
      required: true,
      default: 0,
    },

    status: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      required: false,
    },

    phone: {
      type: Number,
      required: true,
      default: 0,
    },

    homeAddress: {
      type: String,
      required: false,
    },

    workAddress: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
