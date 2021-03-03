const mongoose = require('mongoose');

const TankSchema = new mongoose.Schema({
  userId:{
    type: String,
    required: [true, "You need to have a User Id to build a tank"],
  },
  tankSize: { 
    type: Number,
    required: [true, "You need to start off with a tank"],
    },
  substrate: {
    type: String,
    required: [true, "You need to enter a type of substarte"],
    minlength: [3, "Substrate has to be at least 3 characters"]
  },
  plantOne: { 
    type: String,
    required: [false],
    
  },
  plantTwo: { 
    type: String,
    required: [false],
    
  },
  plantThree: { 
    type: String,
    required: [false],
    
  },
  plantFour: { 
    type: String,
    required: [false],
    
  },

  plantFive: { 
    type: String,
    required: [false],
    
  },

  decorType: { 
    type: String,
    required: [true, "You need to have some type of decor"],
    minlength: [3, "Decor needs to be at least 3 characters"]
  },
  filterType: { 
    type: String,
    required: [true, "You need to have a filter"],
  },
  fish:{
    type: [{fishType: String }],
    required: [true]
  }

}, {timestamps: true });

module.exports = mongoose.model('Tank', TankSchema);