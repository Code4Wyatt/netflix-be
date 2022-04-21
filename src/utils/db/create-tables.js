import fs from "fs-extra";
import path from "path";
import pool from "./connect.js";

const createTables = async () => {
    try {
        const filePath = path.join(process.cwd(), './src/utils/db/tables.sql');
        const fileContentAsBuffer = await fs.readFile(filePath);
        const fileContentAsString = fileContentAsBuffer.toString();

        await pool.query(fileContentAsString);

        console.log("Default tables created.")

    } catch (error) {
        console.log("Cannot read the SQL file due to the following error: ", error);
    }
};

(async () => {
    await createTables();
})();