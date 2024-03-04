const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  GSTNumber: {
    type: String,
    required: true,
    unique: true // assuming GST number is unique for each entry
  },
  pincode: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  BranchManagerName:{
    type:String,
    required:true
  },
  Branchaddress:{
    type:String,
    required:true
  },
  BranchContact:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model('users', userSchema);
