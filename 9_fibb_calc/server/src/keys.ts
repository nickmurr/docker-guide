const keys = {
  redisPort: process.env.REDIS_PORT as any,
  redisHost: process.env.REDIS_HOST,
  pgUser: process.env.PGUSER,
  pgHOST: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT as any,
};

export default keys;
