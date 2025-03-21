require('dotenv').config();
const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in the .env file");
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes("railway.app")
        ? false // Disable SSL for Railway
        : { rejectUnauthorized: false } // Keep for other cloud providers
});

module.exports = pool;
