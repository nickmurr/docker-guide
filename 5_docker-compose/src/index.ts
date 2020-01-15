import express from "express";
import { createClient } from "redis";
// import process from "process";

const app = express();

const client = createClient({
  host: "redis-server",
  port: 6379
});

client.set("visits", "1");

app.get("/", (req, res) => {
  client.get("visits", (err, visits: string) => {
    res.send(`Number of visits: ${visits}`);
    const v = parseInt(visits) + 1;
    client.set("visits", `${v}`);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
