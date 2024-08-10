const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const cookiesParser = require("cookie-parser")



app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookiesParser())

const order = require("./routers/Order");
const retailer = require("./routers/Retailer");

app.use("/order", order);
app.use("/retailer", retailer);


module.exports = app;