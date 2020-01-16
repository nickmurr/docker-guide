import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { pgClient } from "../postgres/postgres";
import { redisClient, redisPublisher } from "../redis/redis";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Express Route Handlers
app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");

  res.send(values.rows);
});

app.get("/values/current", async (req, res) => {
  redisClient.hgetall("values", (err, values) => {
    res.send(values);
  });
});

app.post("/values", async (req, res) => {
  const index = req.body.value;

  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high");
  }

  redisClient.hset("values", index, "Nothing yet");
  redisPublisher.publish("insert", index);

  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

  res.send({ working: true });
});

export default app;
