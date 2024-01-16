require("dotenv").config();
module.exports = {
  client: process.env.DB_TYPE,
  connection: {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      database: process.env.DB_DATABASE,
      instanceName: process.env.DB_INSTANCE,
    },
  },
};
