const Joi = require("joi");
const db = require("../models");

// @DES ADD RETAILER DETAILS:
// POST API

exports.addRetailerDetails = async (req, res) => {
  const input = req.body;

  const rules = Joi.object({
    retailer_address: Joi.string().required().messages({
      "string.base": "Address must be a string",
      "any.required": "Address is a required field",
    }),
    contact_number: Joi.string().required().messages({
      "string.base": "Contact number must be a string",
      "any.required": "Contact number is a required field",
    }),
    line1: Joi.string().required().messages({
      "string.base": "Line 1 must be a string",
      "any.required": "Line 1 is a required field",
    }),
    line2: Joi.string().required().messages({
      "string.base": "Line 2 must be a string",
      "any.required": "Line 2 is a required field",
    }),
    line3: Joi.string().required().messages({
      "string.base": "Line 3 must be a string",
      "any.required": "Line 3 is a required field",
    }),
  });

  const { error } = rules.validate(input, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation errors",
      errors: error.details.map((detail) => detail.message),
    });
  }

  try {
    const retailer = {
      retailer_address: input.retailer_address,
      contact_number: input.contact_number,
      line1: input.line1,
      line2: input.line2,
      line3: input.line3,
    };

    console.log(retailer);

    // Create retailer details
    const retailerData = await db.Retailer.create(retailer);

    res.status(200).json({
      success: true,
      message: "Retailer details created successfully",
      retailerData,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating retailer details",
      error: error.message,
    });
  }
};

// LIST RETAILER LIST
// GET API
exports.retailerList = async (req, res) => {
  try {
    const retailer = await db.Retailer.findAll();

    if (retailer && retailer.length > 0) {
      res.status(200).json({
        success: true,
        retailer: retailer,
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
      message: error.message,
    });
  }
};
