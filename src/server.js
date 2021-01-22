const express = require("express");
const database = require("./database");
const cors = require("cors");

const servicesRoute = require("./services");

const server = express();
const port = process.env.PORT || 9001;

server.use(cors());
server.use(express.json());

server.use("/api", servicesRoute);

database.sequelize.sync({ force: false }).then((result) => {
    server.listen(port, () => {
        console.log("Server is running on: " + port);
    });
});
//database.sequelize.sync SYNCS OUR CODE WITH OUR DATABASE TO CREATE THE TABLES
//{ force: true } FORCES THE CODE TO OVERWRITE ALREADY EXISTING TABLES