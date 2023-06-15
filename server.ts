import dotenv from "dotenv";
import app from "./src/app";

dotenv.config();

const HOST: string = process.env.SERVER_HOST || '127.0.0.1';
const PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running in at http://${HOST}:${PORT}`);
})

process.on("SIGINT", () => {
    server.close(() => console.log(`Exist Server Express`))
})