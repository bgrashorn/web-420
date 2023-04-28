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
const composerAPI = require("./routes/grashorn-composer-routes.js");
const personAPI = require("./routes/grashorn-person-route.js")
const userAPI = require("./routes/grashorn-session-routes.js");
const customerAPI = require("./routes/grashorn-node-shopper-routes.js");

const app = express();

const conn = "mongodb+srv://web420_user:s3cret@bellevueuniversity.3x5untt.mongodb.net/web420DB"; //Our MongoDB Server

app.set("port", process.env.PORT || 3000);

mongoose 
    .connect(conn)
    .then(() => {
        console.log(
            "Connection to MongoDB was successful\n If you see this message it means you were able to connect to your MongoDB Atlas cluster"
        );
    })
    .catch((err) => {
        console.log("MongoDB error: " + err.message);
    });

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
app.use("/api", composerAPI);
app.use("/api", personAPI);
app.use("/api", userAPI);
app.use("/api", customerAPI);

http.createServer(app).listen(app.get("port"), function () {
    console.log(`Application started and listening on port ${app.get("port")}`);
});

