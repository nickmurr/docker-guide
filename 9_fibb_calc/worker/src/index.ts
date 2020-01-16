import { createClient } from "redis";
import fibonacci from "./fib";
import keys from "./keys";

const redisClient = createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

sub.on("message", (channel: string, message: string) => {
  const num = parseInt(message, 0);
  redisClient.hset("values", message, fibonacci(num));
});

sub.subscribe("insert");
