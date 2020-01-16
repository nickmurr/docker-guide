import { Pool } from "pg";
import keys from "../keys";
// PG
const pgClient = new Pool({
  database: keys.pgDatabase,
  host: keys.pgHOST,
  password: keys.pgPassword,
  port: keys.pgPort,
  user: keys.pgUser,
});

pgClient.on("error", () => console.error("Lost PG connection"));

pgClient
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch((err) => {
    console.error(err);
  });

export { pgClient };
