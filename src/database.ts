import { getConnectionManager } from "typeorm";

if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL.indexOf("sslmode=require") === -1) {
    process.env.DATABASE_URL += "?sslmode=require";
}

export default async function connectDatabase() {
    const connectionManager = await getConnectionManager();
    const connection = connectionManager.create({
        name: "default",
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [__dirname + "/entities/*.*"],
        ssl: process.env.NODE_ENV === 'production'
    });

    await connection.connect();
    return connection;
}
