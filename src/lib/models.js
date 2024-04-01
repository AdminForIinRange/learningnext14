const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,

    max: 50,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 6,
  },
  img: {
    type: String,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });



const postSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    desc: {
      type: String,
      required: true,
    
    },
 
    img: {
      type: String,
    },
  
    userID: {
      type: String,
      required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
      }
  }, { timestamps: true });
  