const express = require("express");
const {
  addRetailerDetails,
  retailerList,
} = require("../controllers/retailerController");

const router = express.Router();

// routing
router.route("/add").post(addRetailerDetails);
router.route("/list").get(retailerList);

module.exports = router;
