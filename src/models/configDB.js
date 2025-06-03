const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.URL_CONNECT_TO_SUPABASE,
    ssl: process.env.URL_CONNECT_TO_SUPABASE.includes("localhost") ? false : { rejectUnauthorized: false }
});

pool.on("error", (err) => {
    console.error("Unexpected error on idle PostgreSQL client", err);
});


console.log("Database pool has been initialized!");

module.exports = pool;
