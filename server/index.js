const express = require("express");
const app = express();
const fs = require("fs");
const ytdl = require("ytdl-core");
const cors = require("cors");

app.use(cors());
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
  fs.createWriteStream("video.mp4")
);
// app.get("/download", async (req, res) => {
//   //   console.log();

//   const video = await ytdl.getInfo(
//     "http://www.youtube.com/watch?v=aqz-KE-bpKQ"
//   );

//   console.log(video);
// });

app.get("/download", async (req, res) => {
  console.log(res);

  const video = ytdl.getInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ");
  console.log(video);
  video.then((res) => console.table(res));
  res.json(video);
});

app.listen("8000", () => {
  console.log("COnnected");
});
