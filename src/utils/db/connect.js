import pg from "pg";

const { Pool } = pg;

const pool = new Pool();

export const testDbConnection = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Database connection successful!")
    } catch (error) {
        console.log("Error connecting to the database due to the following error: ", error);
    }
};

export default pool;
