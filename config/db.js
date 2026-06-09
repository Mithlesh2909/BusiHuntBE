require("dotenv").config();

const { Pool } = require("pg");

console.log("-----",process.env.DB_USER)
console.log("-----",process.env.DB_HOST)
console.log("-----",process.env.DB_NAME)
console.log("-----",process.env.DB_PASSWORD)
console.log("-----",process.env.DB_PORT)

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
   ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("PostgreSQL connected");
  }
});

module.exports = pool;
