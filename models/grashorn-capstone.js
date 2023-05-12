/*
==============================================================================
; Title: grashorn-capstone.js
; Author: Brett Grashorn
; Bellevue University
; Date: 05/11/23
; Description: schema for our Capstone API
; Work Cited: 
    Coding Guidelines
    Web-420 Assign_9
    Web-420 GitHub Examples
=================================================================================================================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let playerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    salary: { type: Number },
}); 

let teamSchema = new Schema({
    name: { type: String },
    mascot: { type: String },
    players: [playerSchema],
});

module.exports = mongoose.model("Teams", teamSchema);
