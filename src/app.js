require("dotenv").config();

const express = require("express");
const { mongoodbConnect } = require("./config/mongodb");
const FuelRouter = require("./routes/FuelRoutes");
const QueueRouter = require("./routes/QueueRoutes");
const StationRouter = require("./routes/StationRoutes");
const UserRouter = require("./routes/UserRouter");
const { logInfo } = require("./utils/logging");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT;

const startingMethod = (port) => {
    console.log("\n");
    console.log("Starting server...");
    mongoodbConnect();
    logInfo(`App listning on http://localhost:${port}`);
};


app.listen(PORT, startingMethod(PORT));

app.use(cors());
app.use(express.json());

app.use('/api/queue', QueueRouter);
app.use('/api/fuel', FuelRouter);
app.use('/api/station', StationRouter);
app.use('/api/user', UserRouter);