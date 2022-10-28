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

app.use('/api/queue', QueueRouter);
app.use('/api/fuel', FuelRouter);
app.use('/api/station', StationRouter);
app.use('/api/user', UserRouter);





// Home View
app.get('*', function(req, res){
    res.send(
        `<div>
        <style>
            * {
                background: #101010;
                color: #fff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .container {
                position: absolute;
                transform: translate(-50%, -50%);
                width: 50%;
                height: fit-content;
                border: #808080;
                left: 50%;
                top: 50%;
                text-align: center;
            }
        </style>


        <div class="container">
            <h2>FILL FUEL Rest API backend service</h2>
            <img src="https://user-images.githubusercontent.com/55337770/198184616-054cac6d-4935-4a2e-b2b0-2cbac02c2329.png" alt="logo" width="300"/>
        </div>
    </div>`
    );
});