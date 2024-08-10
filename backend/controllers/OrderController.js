const Joi = require("joi");
const db = require("../models");

// @DES ADD NEW ORDER:
// POST API

exports.addNewOrder = async (req, res) => {
  const input = req.body;

  const rules = {
   product: Joi.array().items(Joi.string()).required().messages({
    "array.base": "Product must be an array of strings",
   
  }),
  quantity: Joi.array().items(Joi.number()).required().messages({
    "array.base": "Quantity must be an array of strings",
   
  }),
  };

  const { error } = Joi.object(rules).validate(input, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation errors",
      errors: error.details.map((detail) => detail.message),
    });
  }
  try {
    const orderData = {
      product: input.product,
      quantity:input.quantity
    };

    // Create a new order
    const createOrder = await db.Order.create(orderData);

    res.status(200).json({
      success: true,
      message: "Order created successfully...",
      createOrder,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// @ DES LIST ORDER LIST
// GET API
exports.orderList = async (req, res) => {
  try {
    const order = await db.Order.findAll();

    if (order && order.length > 0) {
      res.status(200).json({
        success: true,
        order: order,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

// ::::::::::::::::::::::::::::::::::::::::::::::::END::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
