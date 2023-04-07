/*
============================================
; Title:  grashorn-composer.js
; Author: Brett Grashorn
; Date:   6 April 2023
; Description: Composer Mongoose Model
;===========================================
*/

const mongoose = require('mongoose'); // mongoose require statement
const Schema = mongoose.Schema; //schema variable assigned to mongoose schema object

// Composer schema
let composerSchema = new Schema({

    firstName: { type: String },
    lastName: { type: String }
});

// Export statement named Composer
module.exports = mongoose.model('Composer', composerSchema);