/*
==============================================================================
; Title: grashorn-person.js
; Author: Brett Grashorn
; Bellevue University
; Date: 04/16/23
; Description: person schema for our API
; Work Cited: 
    Coding Guidelines
    Web-420 Assign_5
    Web-420 GitHub Examples
=================================================================================================================
*/

const mongoose = require("mongoose"); //variable for mongoose require statement
const Schema = mongoose.Schema; //schema variable assigned to mongoose schema object

// role schema
let roleSchema = new Schema({
    text: { type: String }
});

// dependent schema
let dependentSchema = new Schema({ 
    firstName: { type: String},
    lastName: { type: String },
});

// person schema
let personSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    roles: { type: String},
    dependents: [dependentSchema],
    birthDate: { type: String},
});

module.exports = mongoose.model("Person", personSchema);