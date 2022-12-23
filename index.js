const express = require("express");
const path = require("path");
const Datastore = require("nedb");
const { isValidSaveRequest } = require("./utils");
const db = new Datastore();

const port = 4600;
const app = express();

const pushPrivateKey = "qoJayOfuSgTjY5kYt0smboP5DgWRkHm3bG5pLIrYWlU";
app.use(express.static("public"));
app.use("/api/save-subscription/", (req, res, next) => {
  if (isValidSaveRequest(req, res)) {
    next();
  }
});
app.get("/", (req, res) => {
  console.log("siuu");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`lsitening on http://localhost:${port}`);
});
