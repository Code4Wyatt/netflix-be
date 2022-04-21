import express from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

server.listen(process.env.PORT || 6000, async () => {
    console.log("Server is running!");
    await connectDB;
});

server.on("error", (error) => console.log("Server is not running due to the following error: ", error));