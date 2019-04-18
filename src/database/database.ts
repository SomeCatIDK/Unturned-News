import { format } from "sqlstring";

import config from "../config";
import pool from "./pool";

const tableName = `${config.MySQL.table_prefix}posts`;
const createTable = format("CREATE TABLE ?? (?? VARCHAR(255) NOT NULL, ?? VARCHAR(255) NOT NULL)", [tableName, "webhook", "item"]);

async function __init() {
    const result: [] = await pool.query(format("SHOW TABLES LIKE ?", [tableName])).catch((err) => {
        console.error("There was an error accessing the database!");
        console.error(err);

        process.exit(1);
    });

    if (result.length === 0) {
        console.log("Couldn't find the table, recreating it...");

        await pool.query(createTable).catch((err) => {
            console.error("There was an error creating the table!");
            console.error(err);

            process.exit(1);
        });

        console.log("Table created!");
    }
}

__init();

export async function getAllEntries(): Promise<Array<[string, string]>> {
    const results: any[] = await pool.query(format("SELECT * FROM ??", [tableName]));
    const values = new Array<[string, string]>();

    results.forEach((result) => {
        values.push([result.webhook, result.item]);
    });

    return values;
}

export async function insertNewEntry(entry: [string, string]) {
    await pool.query(format("INSERT INTO ?? VALUES(?, ?)", [tableName, entry[0], entry[1]])).catch((err) => {
        console.error(`There was an error inserting the following data into the table: ${entry}!`);
        console.error(err);
    });
}
