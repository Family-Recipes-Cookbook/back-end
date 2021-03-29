// Update with your config settings.
// require("dotenv").config();
// const pg = require("pg");
// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false };
// }
// const sharedConfig = {
//   client: "pg",
//   migrations: { directory: "./data/migrations" },
// };

// module.exports = {
//   development: {
//     ...sharedConfig,
//     connection: process.env.DEV_DATABASE_URL,
//     // connection: { filename: "./data/secret-family-recipes.db3" },
//     seeds: { directory: "./data/seeds" },
//   },
//   testing: {
//     ...sharedConfig,
//     connection: process.env.TESTING_DATABASE_URL,
//     // connection: { filename: "./data/test.db3" },
//   },
//   production: {
//     client: "pg",
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: "./data/migrations" },
//     seeds: { directory: "./data/seeds" },
//   },
// };
require("dotenv").config();
const pg = require("pg");
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}
const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};
module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};
