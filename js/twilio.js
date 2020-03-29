"use strict";

// Twilio Credentials
const accountSid = "ACeee8e16c397bc117e02ee09ad91a8d07";
const authToken = "92ce6ff9994071687bc696a3e8d00b53";
// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({
    // to: "233733",
    to: "+17038515514",
    from: "+19375230617",
    body: "CrowdFace has detected a missing person on this twitch livestream.",
    mediaUrl: "https://climacons.herokuapp.com/clear.png"
  })
  .then(message => console.log(message.sid));

const express = require("express");
const app = express();
const server = app.listen(4000);
