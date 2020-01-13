import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi There Again</h1>");
});

app.listen(3000, () => {
  console.log("App running on :3000");
});
