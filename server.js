const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 8100;

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'hideme'}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port);
console.log(`Server running on port: ${port}`);