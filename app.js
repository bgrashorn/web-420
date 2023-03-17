/*
==============================================================================
; Title: app.js
; Author: Brett Grashorn
; Bellevue University
; Date: 03/16/2023
; Description: This file sets up the backend
; Work Cited: 
    Coding Guidelines
    Web-420 Assign
=================================================================================================================
*/
"use-strict";

const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTFul APIs',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'], //files containing annotations for the OpenAPI Specification
};

const openapiSpecification = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

http.createServer(app).listen(app.get("port"), function () {
    console.log(`Application started and listening on port ${app.get("port")}`);
});

