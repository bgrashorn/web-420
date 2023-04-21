/*
==============================================================================
; Title: grashorn-user.js
; Author: Brett Grashorn
; Bellevue University
; Date: 04/20/23
; Description: user schema for our API
; Work Cited: 
    Coding Guidelines
    Web-420 Assign_6
    Web-420 GitHub Examples
=================================================================================================================
*/

const mongoose = require('mongoose'); //variable for mongoose require statement
const Schema = mongoose.Schema; //schema variable assigned to mongoose schema object

let userSchema = new Schema({
    userName: { type: String },
    password: { type: String },
    emailAddress: { type: String },
});

module.exports = mongoose.model("User", userSchema);