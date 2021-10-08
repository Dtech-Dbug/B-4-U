const express = require("express");
const app = express();
const fs = require("fs");
const ytdl = require("ytdl-core");
const cors = require("cors");
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import next from "next";

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: { distDir: "dist/client" },
});
const handle = app.getRequestHandler();

const server = functions.https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  console.log("File: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});
app.use(cors());
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// ! passing encoded data of vdo
// ? fs writing file
ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
  fs.createWriteStream("video.mp4")
);

app.get("/videoInfo", async (req, res) => {
  console.log(res);
  console.log(req.query.videoURL);
  videoURL = req.query.videoURL;
  const videoInfo = await ytdl.getInfo(videoURL);
  res.status(200).send(videoInfo);
});

app.listen("8000", () => {
  console.log("COnnected");
});
