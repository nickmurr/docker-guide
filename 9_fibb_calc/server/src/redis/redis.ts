import keys from "../keys";
import { createClient } from "redis";

const redisClient = createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const redisPublisher = redisClient.duplicate();

export { redisClient, redisPublisher };
