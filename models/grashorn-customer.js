/*
==============================================================================
; Title: grashorn-customer.js
; Author: Brett Grashorn
; Bellevue University
; Date: 04/27/23
; Description: customer schema for our API
; Work Cited: 
    Coding Guidelines
    Web-420 Assign_7
    Web-420 GitHub Examples
=================================================================================================================
*/

const mongoose = require('mongoose'); //variable for mongoose require statement
const Schema = mongoose.Schema; //schema variable assigned to mongoose schema object

let lineItemSchema = new Schema({
    name: { type: String},
    price: { type: Number },
    quantity: { type: Number },
});

let invoiceSchema = new Schema({
    subtotal: { type: Number },
    tax: { type: Number },
    dateCreated: { type: String },
    dateShipped: { type: String },
    lineItems: [lineItemSchema],
});

let customerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String},
    invoices: [invoiceSchema],
});

module.exports = mongoose.model("Customer", customerSchema);