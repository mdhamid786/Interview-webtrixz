const express = require("express");
const { orderList, addNewOrder } = require("../controllers/orderController");

const router = express.Router();

// routing
router.route("/add").post(addNewOrder);
router.route("/list").get(orderList);

module.exports = router;
