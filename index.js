require("dotenv").config();

const express = require("express");
const { mongoodbConnect } = require("./src/config/mongodb");
const FuelRouter = require("./src/routes/FuelRoutes");
const QueueRouter = require("./src/routes/QueueRoutes");
const StationRouter = require("./src/routes/StationRoutes");
const UserRouter = require("./src/routes/UserRouter");
const { logInfo } = require("./src/utils/logging");
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

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.use('/api/queue', QueueRouter);
app.use('/api/fuel', FuelRouter);
app.use('/api/station', StationRouter);
app.use('/api/user', UserRouter);

app.get('*', function(req, res){
    res.render('/views/index.html');
  });