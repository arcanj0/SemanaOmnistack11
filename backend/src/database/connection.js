const knex = require("knex");
const configuration = require("../../knexfile");

//environment variable, configured in the connection.js file
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(config);

module.exports = connection;
