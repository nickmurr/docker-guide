const keys = {
  pgDatabase: process.env.PGDATABASE,
  pgHOST: process.env.PGHOST,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT as any,
  pgUser: process.env.PGUSER,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT as any,
};

export default keys;
